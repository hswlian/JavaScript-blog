import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import Login from './pages/login/login';
import Home from './pages/home/home';

class App extends Component{
    render() {
        return(
            <div className="App">
                <Switch>
                    <Route exact path="/" component={ Login }/>
                    <Route exact path="/home" component={ Home }/>
                </Switch>
            </div>
        )
    }
}

export default App;