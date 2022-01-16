import Button from "@restart/ui/esm/Button";
import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="notFound">
      <img
        src="https://i.ibb.co/zVcwy5s/404-Error-rafiki.png"
        alt="Not Found"
      />
      <br />
      <Link to="/">
        <Button className="btn btn-primary">Go to HomePage</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
