import React,{Component} from "react";
import "./book.css";
import Star from "../star/star";
import "../../fontawesome";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Book extends Component{
    render(){
        return(
            <div className = "col-sm-4">
                <div className = "card">
                <img className="card-img-tag center " alt={this.props.book.name} src={this.props.book.picture.thumbnail} />
                <div className="card-body">
                <h5 className="card-title ">
                    <p key="authorbook">
                        <FontAwesomeIcon icon={["fas", "book"]} />
                        <span> {this.props.book.name}</span>
                    </p>
                </h5>
                    <p key="author">
                     <FontAwesomeIcon icon={["fas", "user"]} />    
                     {`${this.props.book.author.name.first} ${this.props.book.author.name.last}`}
                    </p>

                    <div className="mark">
                        <span className ="bookmarkfont">Bookmark: </span><Star star={this.props.book.mark}/>
                    </div>
                </div>

                <div className="card-footer">
                    <div className="btn-group d-flex btn-group-justified" role="group" aria-label="...">
                        <button type="button" className={"btn btn-default w-100"}>{" Edit "}</button>
                        <button type="button" className={"btn btn-danger w-100"}>{"Delete"}</button>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Book;