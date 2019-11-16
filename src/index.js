import React, {Component}from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import api from "./dataChange/datachangeAPI";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './index.css';
import App from './App';
import BookPage from "./components/bookPage";
import bookAddPage from "./components/bookAddPage";
import datafile from './data/data.json';
import Login from "./Login";
import SignUp from "./SignUp"
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

class Router extends Component{
    
    componentDidMount(){
        let{results : books} = datafile;
        api.initialize(books);
        this.setState({});
    }

    render(){
        return(
          <AuthProvider>
            <BrowserRouter>
            <div className="jumbotron">

                <Switch>
                  <PrivateRoute exact path="/home" component={App} />
                  <Route exact path="/login" component={Login}/>
                  <Route exact path="/" component={SignUp}/>
                  <Route path="/books/:id" component={BookPage} />
                  <Route path="/book/addBook" component={bookAddPage} />
                 
                  <Redirect from="*" to="/" />
                </Switch>
              
            </div>
          </BrowserRouter>
        </AuthProvider>
        );
    }
}
ReactDOM.render(<Router />, document.getElementById('root'));
