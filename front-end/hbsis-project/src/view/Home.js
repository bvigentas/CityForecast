import React,{ Component } from 'react';

export default class Home extends Component {
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
                                    <tr>
                                    <td>Tiger Nixon</td>
                                    </tr>
                                    <tr>
                                    <td>Garrett Winters</td>
                                    </tr>
                                    <tr>
                                    <td>Ashton Cox</td>
                                    </tr>
                                    <tr>
                                    <td>Cedric Kelly</td>
                                    </tr>
                                    <tr>
                                    <td>Airi Satou</td>
                                    </tr>
                                    <tr>
                                    <td>Brielle Williamson</td>
                                    </tr>
                                    <tr>
                                    <td>Herrod Chandler</td>
                                    </tr>
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