import React from "react";
import "./bookPrivate.css";
import "../../fontawesome";

export default ({ user }) => {
    return (
        <div className="privaterow">
            <h3>Book's Introduction</h3>
            <p>{user.introduction}</p>
        </div>
    );
}