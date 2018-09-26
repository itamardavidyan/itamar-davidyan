import * as React from "react";

export default class siteFooter extends React.Component<any, any> {
  public render() {
    return (
      <footer className="site-footer">
        <div className="container">
          <h3>
            <span className="primary">Itamar</span>
            <strong className="secondary"> Davidyan</strong>
          </h3>
          <p>
            Web developer, designer, autodidact, tech writer and problem solver.
            I love hiking, play computer games, and building communities.
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/itamar.davidyan">
              <i className="fa fa-facebook fa-2x" aria-hidden="true" />
            </a>
            <a href="https://twitter.com/itamardavidyan" target="_blank">
              <i className="fa fa-twitter fa-2x" aria-hidden="true" />
            </a>
            <a href="https://github.com/itamardavidyan" target="_blank">
              <i className="fa fa-github fa-2x" aria-hidden="true" />
            </a>
            <a
              href="https://stackoverflow.com/users/8417195/itamar-davidyan"
              target="_blank"
            >
              <i className="fa fa-stack-overflow fa-2x" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/itamar-davidyan/"
              target="_blank"
            >
              <i className="fa fa-linkedin-square fa-2x" aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
