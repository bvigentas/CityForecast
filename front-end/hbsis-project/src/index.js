import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/sb-admin-2.min.css';
import 'bootstrap';
import './css/dataTables.bootstrap4.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './view/Home';
import CityRegistration from './view/CityRegistration';


ReactDOM.render(
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path="/forecast" component={Home}/>
                <Route path="/new_city" component={CityRegistration}/>
            </Switch>
        </App>
    </BrowserRouter>, document.getElementById('root')
);
serviceWorker.unregister();
