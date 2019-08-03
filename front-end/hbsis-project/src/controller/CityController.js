import $ from 'jquery';


export default class ForecastController {

    getCities() {
        $.ajax({
            url: 'localhost:8080/city/cities',
            contentType: 'application/json',
            dataType: 'json',
            type: 'get',
            success: () => {
                console.log('Cities request successfully');
            },
            error: result => {
                if (result.status === 400) {
                    
                }
            }
        })
    }

    setCity(name) {
        $.ajax({
            url: 'localhost:8080/city',
            contentType: 'application/json',
            dataType: 'json',
            type: 'post',
            data: JSON.stringify({name: name}),
            success: () => {
                return true;
            },
            error : result => {
                return result;
            }
        });
    }
}