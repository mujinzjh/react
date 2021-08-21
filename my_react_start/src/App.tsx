import { Component } from 'react';
import './App.css';
import RouterView from './router/RouterView';
// import { BrowserRouter, Route, Link, Switch, Router, HashRouter } fr÷om "react-router-dom";
// import Login from './views/login/login';
class App extends Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <RouterView></RouterView>
            </div>
        );
    }
}


export default App;