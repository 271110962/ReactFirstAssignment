import React,{Component} from "react";
import "./book.css";
import Star from "../star/star";
import "../../fontawesome";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import buttons from "../../config/buttonconfig";
import api from "../../dataChange/datachangeAPI";
import { Link } from "react-router-dom";

class Book extends Component{
    state ={
        status:"",
        id: this.props.book.id,
        name: this.props.book.name,
        type: this.props.book.type,
        previousDetails: {
            id: this.props.book.id,
            name: this.props.book.name,
            type: this.props.book.type
            }
    };


    handleEdit=()=>this.setState({status:"edit"});

    handleSave=e=>{
        e.preventDefault();
        let updatedName = this.state.name.trim();
        let updatedType = this.state.type.trim();
        if(!updatedName || !updatedType){
            return;
        }
        let {name,type} = this.state;
        this.setState({ status:"",previousDetails:{name,type}});
        api.update(this.state.previousDetails.name,updatedName,updatedType);
    };

    handleCancel=()=>{
        let{name,type} = this.state.previousDetails;
        this.setState({status:"",name,type});
    };

    handleNameChange=e=>this.setState({name:e.target.value});
    handleTypeChange=e=>this.setState({type:e.target.value});


    handleDelete = () =>  this.setState({ status : 'del'} );
    handleConfirm=(e)=>{
        e.preventDefault();
        this.props.deleteHandler(this.state.id);
    }

    render(){

        let activeButtons=buttons.normal;
        let leftButtonHandler = this.handleEdit;
        let rightButtonHandler = this.handleDelete;
        let cardColor = "bg-white";

        if (this.state.status === "edit") {
            cardColor = "bg-primary";
            activeButtons = buttons.edit;
            leftButtonHandler = this.handleSave;
            rightButtonHandler = this.handleCancel;
          }else if (this.state.status === 'del' ) {
            cardColor = "bg-warning";
            activeButtons = buttons.delete;
            leftButtonHandler = this.handleCancel;
            rightButtonHandler = this.handleConfirm;
          }

        return(
            <div className = "col-sm-4">
                <div className ={`card ${cardColor}`}>
                <Link to={`/books/${this.props.book.id}${this.props.book.publishdate}`}>
                <img className="card-img-tag center " alt={this.props.book.name} src={this.props.book.picture.thumbnail} />
                </Link>
                <div className="card-body">
                <h5 className="card-title ">
                {this.state.status === "edit" ? (
                    <p>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.handleNameChange}/>
                    </p>):(
                    <p key="authorbook">
                    <FontAwesomeIcon icon={["fas", "book"]} />
                    <span> {this.props.book.name}</span>
                </p>
                    )}
                </h5>
                    <p>
                     <FontAwesomeIcon icon={["fas", "user"]} />    
                     {` Author: ${this.props.book.authorlast} ${this.props.book.authorlast}`}
                    </p>
                {this.state.status === "edit" ? (
                    <p>
                         <input type="text" className="form-control" value={this.state.type} onChange={this.handleTypeChange}/>
                    </p>
                ):(
                    <p key="type">
                        <FontAwesomeIcon icon={["fas", "bookmark"]} />
                        <span> Category: {this.props.book.type}</span>
                    </p>
                )}
                    <div className="mark">
                        <span className ="bookmarkfont"> Book Review: </span><Star star={this.props.book.mark}/>
                    </div>
                </div>

                <div className="card-footer">
                    <div className="btn-group d-flex btn-group-justified" role="group" aria-label="...">
                        <button type="button" className={"btn btn-default w-100"+ activeButtons.leftButtonColor} onClick={leftButtonHandler}> {activeButtons.leftButtonVal}</button>
                        <button type="button" className={"btn btn-danger w-100"+ activeButtons.rightButtonColor} onClick={rightButtonHandler}>{activeButtons.rightButtonVal}</button>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Book;