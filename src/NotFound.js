import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="404">
      <h2> Ooooops.... </h2>
      <p> La page n'éxiste pas </p>
      <img
        src="https://www.sanctius.net/wp-content/uploads/2011/01/page-erreur-404-19.jpg"
        alt=""
      />
      <div>
        <Link to="/"> Revenir a la page d'acceuil... </Link>
      </div>
    </div>
  );
};

export default NotFound;
