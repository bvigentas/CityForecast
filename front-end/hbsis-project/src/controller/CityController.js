import $ from 'jquery';


export default class ForecastController {

    constructor() {
        this.state = {uriBackEnd: 'http://localhost:8080'};
    }

    getCities() {
        let callResult = [];
        $.ajax({
            url: `${this.state.uriBackEnd}/city/cities`,
            contentType: 'application/json',
            dataType: 'json',
            async: false,
            timeout: 30000,
            type: 'get',
            success: result => {
                console.log('Cities request successfully');
                callResult = result;
            },
            error: result => {
                callResult = result
            }
        });

        return callResult;
    }

    setCity(name) {
        let callResult = [];
        $.ajax({
            url: `${this.state.uriBackEnd}/city`,
            contentType: 'application/json',
            dataType: 'json',
            async: false,
            timeout: 30000,
            type: 'post',
            data: JSON.stringify({name: name}),
            success: result => {
                callResult = result;
            },
            error : result => {
                callResult = result;
            }
        });

        return callResult;
    }
}