import React,{ Component } from 'react';
import CityController from '../controller/CityController';

export default class Home extends Component {

    constructor() {
        super();
        this.state = {lista: []};
        this.updateList = this.updateList.bind(this);
    }

    componentDidMount() {
        const cityController = new CityController();
        const result =cityController.getCities();
        this.setState({lista: result});
    }

    render() {
        return (
            
            <div class="row">
                <div class="col-xl-6 col-md-6 mb-6">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Registred Cities</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                    <th>City</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                    <th>City</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {
                                    this.props.lista.map((city) => {
                                        return (
                                        <tr key={city.id}>
                                            <td>{city.name}</td>
                                        </tr>
                                        );
                                    })
                                    }
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-6 col-md-6 mb-6">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Forecast for the next 5 days.</h6>
                        </div>
                        <div class="card-body">
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}