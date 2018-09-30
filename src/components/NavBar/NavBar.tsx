import * as React from "react";

export default class NavBar extends React.Component<any, any> {
  // constructor(props: any) {
  //   super(props);
  //   this.state = {
  //     event: this.props.projectsClick
  //   };
  // }

  public render() {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a
          className="navbar-brand"
          href="https://itamardavidyan.github.io/itamar-davidyan/"
        >
          Itamar Davidyan
        </a>

        <div className="collapse navbar-collapse" id="navbarsExample02">
          <form className="form-inline my-2 my-md-0">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://itamardavidyan.github.io/itamar-davidyan/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#Projects"
                  onClick={this.props.projectsClick}
                >
                  {" "}
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#Contact"
                  onClick={this.props.contactClick}
                >
                  {" "}
                  Contact
                </a>
              </li>
            </ul>
          </form>
        </div>
      </nav>
    );
  }
}
