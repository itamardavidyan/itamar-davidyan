import * as React from "react";
declare var require: any;

export default class Header extends React.Component<any, any> {
  public render() {
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
            <a href="#Contact" onClick={this.props.contactClick}>
              <input type="button" value="Get in Touch" />
            </a>
          </p>
        </div>
      </section>
    );
  }
}
