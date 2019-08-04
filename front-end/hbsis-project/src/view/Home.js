import React,{ Component } from 'react';
import CityController from '../controller/CityController';
import ForecastController from '../controller/ForecastController';
import PubSub from 'pubsub-js';
import $ from 'jquery';

export default class Home extends Component {

    constructor() {
        super();
        this.state = {lista: [],
                      forecastList: [],
                      alertMessage: '',
                      isAlertVisible: false,
                      styleClass: ''};
        this.updateList = this.updateList.bind(this);
    }

    componentDidMount() {
        PubSub.subscribe('show-alert', (topic, data) => {
            this.setState({alertMessage: data.alertMessage, styleClass: data.styleClass, isAlertVisible: data.isAlertVisible});
            if (data.isAlertVisible) {
                $(".alert").alert();
            }  else {
                $(".alert").alert('close');
            }
        });
        
        const cityController = new CityController();
        const result = cityController.getCities();
        this.setState({lista: result});

        PubSub.subscribe('show-forecast', (topic,cityName) => {
            this.showForecast(cityName);
        });


        if (result[0] && result[0].id) {
            PubSub.publish('show-alert', {alertMessage: '', styleClass: '', isAlertVisible: false});
        } else if (result.responseJSON) {
            PubSub.publish('show-alert', {alertMessage: result.responseJSON.message, styleClass: 'alert alert-danger alert-dismissible fade show', isAlertVisible: true});
        }
    }

    updateList() {

    }

    showForecast(cityName) {
        this.setState({isActive: true});
        const forecastController = new ForecastController();
        const result = forecastController.getForecast(cityName);
        this.setState({forecastList: result});
        PubSub.publish('active-loader', false);
    }

    render() {
        return (
            <div>
                <div class={this.state.styleClass} role="alert">
                    {this.state.alertMessage}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="row">
                    <div class="col-xl-6 col-md-6 mb-6">
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Registred Cities</h6>
                            </div>
                            <div class="card-body">
                            <CityTable lista={this.state.lista}/> 
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-6 col-md-6 mb-6">
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Forecast for the next 5 days.</h6>
                            </div>
                            <div class="card-body">
                                <ForecastContainer forecastList={this.state.forecastList}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export class ForecastContainer extends Component {

    getCityName() {
        if (this.props.forecastList && this.props.forecastList.city) {
            return this.props.forecastList.city.name;
        } else {
            return 'Select a city';
        }
    }

    getTempetures() {
        if (this.props.forecastList && this.props.forecastList.list) {
            
        }
    }

    getData(time) {
        const data = new Date(time*1000);
        return ((data.getDate()) + '/' + (data.getMonth() + 1) + '/' + (data.getFullYear()));
    }

    render() {
        return (
            <div>
                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                    {this.getCityName()}<hr/>
                    </div>
                    {   this.props.forecastList.list ? (
                        this.props.forecastList.list.map((forecast) => {
                            return (
                                <div>
                                    <div class="row">
                                        <div class="col-xl-3 col-md-3 mb-3">
                                            <div class="card border-left shadow h-100 py-2">
                                                <div class="card-body">
                                                <div class="row no-gutters align-items-center">
                                                    <div class="col mr-2">
                                                        <div class="text-xs font-weight-bold text-success text-uppercase mb-1">{this.getData(forecast.dt)}</div>
                                                        <div class="h5 mb-0 font-weight-bold text-gray-800">{forecast.weather[0].main}</div>
                                                    </div>
                                                    <div class="col-auto">
                                                        <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-xl-3 col-md-3 mb-3">
                                            <div class="card border-left shadow h-100 py-2">
                                                <div class="card-body">
                                                <div class="row no-gutters align-items-center">
                                                    <div class="col mr-2">
                                                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Min.</div>
                                                        <div class="h5 mb-0 font-weight-bold text-gray-800">{forecast.temp.min}º</div>
                                                    </div>
                                                    <div class="col-auto">
                                                        <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-xl-3 col-md-3 mb-3">
                                            <div class="card border-left shadow h-100 py-2">
                                                <div class="card-body">
                                                <div class="row no-gutters align-items-center">
                                                    <div class="col mr-2">
                                                        <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">Max.</div>
                                                        <div class="h5 mb-0 font-weight-bold text-gray-800">{forecast.temp.max}º</div>
                                                    </div>
                                                    <div class="col-auto">
                                                        <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-xl-3 col-md-3 mb-3">
                                            <div class="card border-left shadow h-100 py-2">
                                                <div class="card-body">
                                                <div class="row no-gutters align-items-center">
                                                    <div class="col mr-2">
                                                        <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Avg.</div>
                                                        <div class="h5 mb-0 font-weight-bold text-gray-800">{forecast.temp.day}º</div>
                                                    </div>
                                                    <div class="col-auto">
                                                        <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                        ) : ''
                    }
            </div>
        )
    }
}


export class CityTable extends Component {

    showForecast(cityName) {
        PubSub.publish('show-forecast', cityName);
        PubSub.publish('active-loader', true);
    }

    render() {
        return(
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                    <th>City</th>
                    <th></th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                    <th>City</th>
                    <th></th>
                    </tr>
                </tfoot>
                <tbody>
                    {
                    this.props.lista.map((city) => {
                        return (
                        <tr key={city.id}>
                            <td class="col-xl-6 col-md-6 mb-6">{city.name}</td>
                            <td class="col-xl-1 col-md-1 mb-1">
                                <button type="submit" class="btn btn-primary" onClick={() => {this.showForecast(city.name)}}>Forecast</button>
                            </td>
                        </tr>
                        );
                    })
                    }
                </tbody>
                </table>
            </div>
        )
    }
}