import * as React from "react";
import Row from "../Projects/Row";
import "./projects.scss";

interface ComponentState {
  skills: Array<RowsComp>;
}

interface RowsComp {
  src: string;
  title: string;
  desc: string;
}

export default class Projects extends React.Component<any, ComponentState> {
  constructor(props: any) {
    super(props);
    this.state = {
      skills: [
        {
          src: "https://github.com/itamardavidyan/Heroku-mLab-Webinar",
          title: "Heroku-mLab-Webinar",
          desc: "Webinar that I passed about Heroku and mLab"
        },
        { src: "", title: "", desc: "" },
        { src: "", title: "", desc: "" },
        { src: "", title: "", desc: "" },
        { src: "", title: "", desc: "" }
      ]
    };
  }

  public render() {
    return (
      <section className="text-center" id="projects">
        <div className="container">
          <header className="section-header">
            <div className="small-container">
              <h2>Projects</h2>
              <p>Some projects I made in my free time.</p>
              <p>
                <a
                  className="btn btn-primary"
                  role="button"
                  href="https://github.com/itamardavidyan"
                >
                  View GitHub
                </a>
              </p>
            </div>
          </header>
        </div>
        <div className="container">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Project</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <Row />
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}
