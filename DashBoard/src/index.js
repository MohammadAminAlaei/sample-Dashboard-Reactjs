import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/defalut.module.scss';
import {App} from "./App";
import {Home} from "./page/Home/Home.page";
import {Dashboard} from "./page/Dashboard/Dashboard.page";

ReactDOM.render(
    <App/>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

