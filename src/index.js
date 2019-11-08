import React, {Component}from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import api from "./dataChange/datachangeAPI";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './index.css';
import App from './App';
import BookPage from "./components/bookPage";
import datafile from './data/data.json';

class Router extends Component{
    
    componentDidMount(){
        let{results : books} = datafile;
        api.initialize(books);
        this.setState({});
    }

    render(){
        return(
            <BrowserRouter>
            <div className="jumbotron">
              <div className="container-fluid ">
                <Switch>
                  <Route path="/books/:id" component={BookPage} />
                  <Route exact path="/" component={App} />
                  <Redirect from="*" to="/" />
                </Switch>
              </div>
            </div>
          </BrowserRouter>
        );
    }
}
ReactDOM.render(<Router />, document.getElementById('root'));
