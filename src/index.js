import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise'
import 'bootstrap/dist/css/bootstrap.min.css';


import './styles/index.scss';
import { rootReducer } from './reducers';
import Home from './components/Home';
import Navigation from './components/Navigvation';

const store = createStore(rootReducer, applyMiddleware(promise))

const ROOT = document.getElementById('root')

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Navigation />
                <Switch>
                    <Route path="/" component={Home}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , ROOT)
