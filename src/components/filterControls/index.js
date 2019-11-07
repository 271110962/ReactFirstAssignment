import React,{Component} from "react";
import "./filterControls.css"

export default class FilterControls extends Component {
    render(){
        return(
            
            <div className="container-fluid">
                <div className="row jinyubg">
                    <div className="col-md-12">
                    <nav className="navbar " role="navigation">
                    

                    <div class="form-group-filter">
                            <select id="category" className="filterform" data-role="select-dropdown" data-profile="minimal">
                            <option>Category</option>
                            <option>Childrens'Book</option>
                            <option>Science Fiction</option>
                            <option>Romantic Novel</option>
                             </select>
                    </div>


                            <div>
                                <button className="fliterbtn" href="#" >Home</button>
                                <button className="fliterbtn" href="#" >Leaderboard</button>
                                <button className="fliterbtn" href="#" >New Shelves</button>                             
                           </div> 
                        </nav>
                    </div>
                </div>
            </div>
            
        );
    }
}