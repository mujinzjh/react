import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import test from "./views/test/test.jsx";
import test1 from "./views/test/test1.jsx";
class App extends Component {
    render() {
        return (
            < div className="App" >
                <BrowserRouter >
                    < Link to='/1' > test </Link>
                    < Link to='/2' > test </Link>
                    <Route path='/1' component={test} />
                    <Route path='/2' component={test1} />
                </BrowserRouter>
            </div>
        );
    }
}


export default App;