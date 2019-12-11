import React, { Fragment } from "react";
import { capitalize} from "../../util";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./bookPublic.css";
import { Link } from "react-router-dom";
import PublicProfile from "../bookPublic/publicProfile"

export default ({ user }) => {
    const bookname = capitalize(`${user.name}`);

    return(
        <Fragment>
      <div className="publicbg">
      <div className="row">
      <div className="col-2">
        <Link to="/home">
          <FontAwesomeIcon icon={["fas", "chevron-circle-left"]} size="3x" />
          <span className="f"> Back</span>
        </Link>
        </div>
        <div className="moving">
          <h2>{bookname}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <img src={user.large} className="book" alt={bookname} />
        </div>
        <div className=" bottommoving">
          <PublicProfile user={user} />
        </div>
      </div>
    </div>
    </Fragment>
    );
};