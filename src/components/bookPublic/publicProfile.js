import React, { Fragment } from "react";
import { capitalize } from "../../util";
import Star from "../star/star";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ user }) => {
    const author = capitalize(
      `${user.author.name.last} ${user.author.name.first}`
    );
    const press =capitalize(
       `${user.publishinghouse}`
    );
    const date = user.publishdate;
    const bookdate = `${date.substr(0, 4)}/${date.substr(4, 2)}/${date.substr(6, 2)}`;
    return(
        <Fragment>
        <h4>
          <FontAwesomeIcon icon={["fas", "user"]} />
          <span> Author: {author}</span>
        </h4>
        <h4>
          <FontAwesomeIcon icon={["fas", "calendar"]} />
          <span> Publish Date: {bookdate}</span>
        </h4>
        <h4>
          <FontAwesomeIcon icon={["fas", "building"]} />
          <span> Press: {press}</span>
        </h4>
        <h4>
          <FontAwesomeIcon icon={["fas", "bookmark"]} />
          <span> Book Review: {<Star star={user.mark}/>}</span>
        </h4>
      </Fragment>
    );
};