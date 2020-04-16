import React, {Component} from 'react';
import Home from './routes/Home';
import "./style/style.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

export default class App extends Component {
    render() {
        return (
            <Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
            </Router>
    	);
    }
}
