import $ from 'jquery';


export class ForecastController {

    getForecast() {
        $.ajax({
            url: '',
            contentType: 'application/json',
            dataType: 'json',
            type: 'get',
            success: () => {
                console.log('Forecast request successfully');
            },
            error: result => {
                if (result.status === 400) {
                    
                }
            }
        })
    }
}