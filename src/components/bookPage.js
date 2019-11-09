import React, {Fragment} from "react";
import { withRouter } from "react-router-dom";
import api from "../dataChange/datachangeAPI"
import BookPublic from "../components/bookPublic/";
import BookPrivate from "../components/bookPrivate/";

const BookPage = props => {
    const { id } = props.match.params;
    const book = api.find(id);
    return (
        <Fragment>
        {book ? (
          <Fragment>
            <BookPublic user={book}/>           
            <BookPrivate user={book} />
          </Fragment>
        ) : (
          <p>Waiting for contact details</p>
        )}
      </Fragment>
   );
 };
 
 export default withRouter(BookPage);