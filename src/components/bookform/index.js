import React,{Component} from "react";



class BookForm extends Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {status:'',name:'', authorfirst:'',authorlast:''}
    

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAdd(this.state.name, this.state.authorfirst, this.state.authorlast);
        this.setState({ name:'', authorfirst:'',authorlast:''});
    }



    handleNameChange = (e) =>  this.setState({name: e.target.value});
    handleAuthorFirstNameChange = (e) =>  this.setState({authorfirst: e.target.value});
    handleAuthorLastNameChange = (e) =>  this.setState({authorlast: e.target.value});
    handleReviewChange = (e) => this.setState({mark: e.target.value});
    handleCategoryChange = (e) => this.setState({type: e.target.value});
    handlePublishDateChange = (e) => this.setState({publishdate: e.target.value});
    handlePressChange = (e) => this.setState({publishinghouse: e.target.value});
    handleIntroChange = (e) => this.setState({introduction: e.target.value});


    render(){
        return(
            <form>
                <h4>Add an Book</h4>
            <div class="form-group">
            <label for="InputBookName">BookName</label>
            <input type="text" class="form-control" id="InputBookName" placeholder="Enter book name" value={this.state.name} onChange={ this.handleNameChange}/>
            </div>
            <div class="form-row">
            <div class="col">
            <label for="InputFirstName">FirstName</label>
                <input type="text" class="form-control" placeholder="First name" value={this.state.authorfirst} onChange={ this.handleAuthorFirstNameChange}/>
            </div>
            <div class="col">
            <label for="InputLastName">LastName</label>
                <input type="text" class="form-control" placeholder="Last name" value={this.state.authorlast} onChange={ this.handleAuthorLastNameChange}/>
            </div>
            </div>

            <div class="form-group">
            <label for="InputCategory">Category</label>
            <input type="text" class="form-control" id="InputCategory"  placeholder="Enter the Category (Science,Children,Romantic)" value={this.state.type} onChange={ this.handleCategoryChange}/>
            </div>

            <div class="form-group">
            <label for="InputReview">Review</label>
            <input type="text" class="form-control" id="InputReview"  placeholder="Enter the Review (0-10)" value={this.state.mark} onChange={ this.handleReviewChange}/>
            </div>


            <div class="form-group">
            <label for="InputDate">Publish Date</label>
            <input type="text" class="form-control" id="InputDate"  placeholder="Enter the Date (example:19950220(YYYYMMDD))" value={this.state.publishdate} onChange={ this.handlePublishDateChange}/>
            </div>

            <div class="form-group">
            <label for="InputPress">The Press</label>
            <input type="text" class="form-control" id="InputPress"  placeholder="Enter the Press" value={this.state.publishinghouse} onChange={ this.handlePressChange}/>
            </div>

            <div class="form-group">
            <label for="Inputintroduction">The Book Introduction</label>
            <input type="text" class="form-control" id="Inputintroduction"  placeholder="Enter the introduction" value={this.state.introduction} onChange={ this.handleIntroChange}/>
            </div>

            <button type="submit" class="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Add Book</button>
            </form>
        );

    };
}

export default BookForm;

