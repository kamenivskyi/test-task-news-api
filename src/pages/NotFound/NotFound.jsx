import React from "react";
import { Link } from "react-router-dom";
import { notFoundPageImg, routesLinks } from "utils/config";

const NotFound = () => (
  <div className="text-center">
    <h2 className="py-2">Not found 404</h2>
    <img className="text-center" src={notFoundPageImg} alt="" />
    <Link
      to={routesLinks.home}
      style={{
        display: "block",
        margin: "20px auto",
      }}
    >
      <button type="button" className="btn btn-dark">
        Back to home page
      </button>
    </Link>
  </div>
);

export default NotFound;
