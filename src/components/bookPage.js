import React, {Fragment} from "react";
import { withRouter } from "react-router-dom";

const BookPage = props => {
    return (
     <Fragment>
         <h3> Book id: {props.match.params.id} </h3>
         <h3> Detail page stub </h3>
     </Fragment>
   );
 };
 
 export default withRouter(BookPage);