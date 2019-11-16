import React,{Component} from "react";
import { Link } from "react-router-dom";
import "./filterControls.css";


export default class FilterControls extends Component {

    handleSearchChange=(e,type,value)=>{
        e.preventDefault();
        this.props.onUserInput(type,value);
    };

    handleCategoryChange = e => {
        this.handleSearchChange(e, "category", e.target.value);
    };



    handleButtonChange=(e,type)=>{
        e.preventDefault();
        this.props.onUser(type);
    }

    handleHome = e =>{
        this.handleButtonChange(e, "home")
    }


    handleMark = e =>{
        this.handleButtonChange(e, "click");
    }


    handleDate = e =>{
        this.handleButtonChange(e, "date");
    }

    render(){
        return(
            
            <div className="container-fluid">
                <div className="row jinyubg">
                    <div className="col-md-12">
                    <nav className="navbar " role="navigation">
                    

                    <div class="form-group-filter">
                            <select id="type" className="filterform" data-role="select-dropdown" data-profile="minimal" onChange={this.handleCategoryChange}>
                            <option>Category</option>
                            <option>Children</option>
                            <option>Science</option>
                            <option>Romantic</option>
                             </select>
                    </div>


                            <div>
                                <button className="fliterbtn" href="#" onClick={this.handleHome}>Home</button>
                                <button className="fliterbtn" href="#" onClick={this.handleMark}>Leaderboard</button>
                                <button className="fliterbtn" href="#" onClick={this.handleDate}>New Shelves</button>
                                <Link to={`/book/addBook`}><button className="fliterbtn">Add a Book</button></Link>                   
                           </div> 
                        </nav>
                    </div>
                </div>
            </div>
            
        );
    }
}