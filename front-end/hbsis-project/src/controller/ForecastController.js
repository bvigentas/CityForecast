import $ from 'jquery';


export default class ForecastController {

    getForecast(cityName) {
        let callResult = [];
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&cnt=5&units=metric&APPID=eb8b1a9405e659b2ffc78f0a520b1a46`,
            async: false,
            timeout: 30000,
            type: 'get',
            success: result => {
                console.log('Forecast request successfully');
                callResult = result;
            },
            error: result => {
                if (result.status === 400) {
                    callResult = result;
                }
            }
        });

        return callResult;
    }
}