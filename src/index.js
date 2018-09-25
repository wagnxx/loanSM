import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import registerServiceWorker from './registerServiceWorker';

import Crouter from "./router/Crouter"
import createStore from './store'

const store=createStore();


ReactDOM.render(
    <Provider store={store}>

            <Crouter/>

    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
