import React,{Component} from 'react';
import CityController from '../controller/CityController';
import PubSub from 'pubsub-js';
import $ from 'jquery';

export default class Home extends Component{

    constructor() {
        super();
        this.state = {name: '', alertMessage: '', isAlertVisible: false, styleClass: ''};
        this.sendForm = this.sendForm.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
        
    }

    setName(event) {
        this.setState({name: event.target.value});
    }

    saveChanges(field, event) {
        let fieldChanged = [];
        fieldChanged[field] = event.target.value;
        this.setState(fieldChanged);
    }

    sendForm(event) {
        event.preventDefault();

        const cityController = new CityController();
        const resultRegistration = cityController.setCity(this.state.name);
        if (resultRegistration.name) {
            PubSub.publish('show-alert', {alertMessage: `${resultRegistration.name} successfully registred!`, styleClass: 'alert alert-success alert-dismissible fade show', isAlertVisible: true});
        } else {
            PubSub.publish('show-alert',{alertMessage: resultRegistration.responseJSON.message, styleClass: 'alert alert-danger alert-dismissible fade show', isAlertVisible: true});
        }
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
    }

    render(){
        return (
            <div>
                <div class={this.state.styleClass} role="alert">
                    {this.state.alertMessage}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="card shadow mb-8">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Register a new city into the system.</h6>
                    </div>
                    <div class="card-body">
                    <form onSubmit={this.sendForm} method="post">
                        <div class="form-group">
                            <label for="city">City name</label>
                            <input type="text" class="form-control" onChange={this.saveChanges.bind(this,"name")} id="city" aria-describedby="cityHelp" placeholder="Enter city name" value={this.state.name}/>
                            <small id="cityHelp" class="form-text text-muted">Only cities present in Open Weather API will be allowed.</small>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    </div>
                </div>
                <br/>
                
            </div>
      );
    }
}