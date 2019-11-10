import React, {Fragment} from "react";
import { withRouter, Route, Link } from "react-router-dom";
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
            {!props.history.location.pathname.endsWith("/private")&&(
              // eslint-disable-next-line
              <Link className="btn btn-warning active" style={{marginTop: '40px'},{marginLeft: '50%'}} to={`/books/${id}/introduction`}>See the Introduction</Link>
            )}
            <Route path={`/books/:id/introduction`}          
        render={(props)=><BookPrivate user={book} />}/>
          </Fragment>
        ) : (
          <p>Waiting for contact details</p>
        )}
      </Fragment>
   );
 };
 
 export default withRouter(BookPage);