import React,{Component} from "react";
import "../../fontawesome";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./header.css"

class Header extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="headerrow">
                    <div className="col-md-6 offset-4">
                        <div className="page-header">
                            <h1>
                             <FontAwesomeIcon icon={["fas", "book"]} /> <span className="fontjinyu" data-text="Jinyu's Book Room">Jinyu's Book Room</span> <span className="badge badge-pill badge-success">{this.props.noBooks}</span>
                             <input type="search" placeholder="Please input the book name" className="form-control mr-sm-2"></input><button class="btn btn-outline-success">Search</button>
                            </h1>   
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;