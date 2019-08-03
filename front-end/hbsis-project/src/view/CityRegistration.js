import React,{Component} from 'react';
import CityController from '../controller/CityController';

export default class Home extends Component{

    constructor() {
        super();
        this.state = {name: ''};
        this.sendForm = this.sendForm.bind(this);
    }

    setName(event) {
        this.setState({name: event.target.value});
    }

    async sendForm(event) {
        event.preventDefault();

        const cityController = new CityController();
        const resultRegistration = await cityController.setCity(this.state.name);
        console.log(resultRegistration);
    }

    render(){
      return (
        <div class="card shadow mb-8">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Register a new city into the system.</h6>
            </div>
            <div class="card-body">
            <form onSubmit={this.sendForm} method="post">
                <div class="form-group">
                    <label for="city">City name</label>
                    <input type="text" class="form-control" id="city" aria-describedby="cityHelp" placeholder="Enter city name" value={this.state.name}/>
                    <small id="cityHelp" class="form-text text-muted">Only cities present in Open Weather API will be allowed.</small>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
      );
    }
}