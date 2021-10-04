import React from "react";
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>404</h2>
            <h3>This page isn't available</h3>
            <p>
                The link you followed may be broken, or the page may have been
                removed.
            </p>
        </div>
    );
};

export default NotFound;
