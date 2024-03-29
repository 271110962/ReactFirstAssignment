import React,{Component} from 'react';
import './star.css';

class Star extends Component{
    constructor(props){
        super(props);
        this.state={
            starNum:['star0','star0','star0','star0','star0'] 
        }
    }
    componentDidMount(){
        this.getStar(Math.round(this.props.star)/2+1); 
    }
    getStar(num){
        let newStar = this.state.starNum.map((item)=>{ 
            --num;
            return num>=1?'star2':((num>0)?'star1':'star0'); 
        })
        this.setState({
            starNum:newStar  
        })
    }
    render(){
        return (<span className="star">
            {
                this.state.starNum.map((item, index)=>{
                    return <span className={item} key={index}></span>
                })
            }
        </span>)
    }
}
export default Star;