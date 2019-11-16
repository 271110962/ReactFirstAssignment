import React, {Fragment} from "react";
import { withRouter } from "react-router-dom";
import BookForm from "./bookform/index";


const bookAddPage = props =>{
    return(
        <Fragment>
            <BookForm />
        </Fragment>
    );
};

export default withRouter(bookAddPage);