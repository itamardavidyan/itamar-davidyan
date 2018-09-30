import * as React from "react";
declare var require: any;

export default function() {
  return (
    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">Itamar Davidyan</h1>
        <p className="lead text-muted">Fullstack developer</p>
        <img
          src={require("./ItamarDavidyan.jpg")}
          alt="profilePicture"
          id="profile"
        />
        <p>
          <input type="button" value="Get in Touch" />
        </p>
      </div>
    </section>
  );
}
