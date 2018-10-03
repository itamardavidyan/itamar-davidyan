import * as React from "react";
import Row from "../Projects/Row";
// import "./projects.scss";

interface ComponentState {
  rows: Array<RowsComp>;
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
      rows: [
        {
          src: "https://github.com/itamardavidyan/itamar-davidyan",
          title: "Resume Site",
          desc: "This (my) resume site that I deployed by myself in ReactJS"
        },
        {
          src: "https://github.com/itamardavidyan/Heroku-mLab-Webinar",
          title: "Heroku-mLab-Webinar",
          desc: "Webinar that I passed about Heroku and mLab"
        },
        {
          src: "https://github.com/itamardavidyan/Forms-Application",
          title: "Form Application",
          desc:
            "fullstack website to manage forms (node.js, jQuery and mongoDB)"
        },
        {
          src: "https://github.com/itamardavidyan/minesweeper-Wix",
          title: "Minesweeper",
          desc: "Mineseeper game (HTML5, CSS and JavaScript)"
        },
        {
          src: "https://github.com/itamardavidyan/ShiftManagement",
          title: "Shift Management",
          desc: "website to manage employee shifts (jQuery + Firebase)"
        }
      ]
    };
  }

  renderRows() {
    return this.state.rows.map((row: RowsComp, index: number) => {
      return (
        <Row title={row.title} src={row.src} desc={row.desc} key={index} />
      );
      // return <p key={index}>{skill.name + " - " + skill.src}</p>;
    });
  }

  public render() {
    return (
      <section className="text-center" id="projects">
        <div className="container">
          <header className="section-header">
            <div className="container small-container">
              <h2>Projects</h2>
              <p>Some projects I made in my free time.</p>
              <p>
                <a href="https://github.com/itamardavidyan" target="_blank">
                  <input type="button" value="View GitHub" />
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
            <tbody>{this.renderRows()}</tbody>
          </table>
        </div>
        <br />
      </section>
    );
  }
}

{
  /* <a
className="btn btn-primary"
role="button"
href="https://github.com/itamardavidyan"
>
View GitHub
</a> */
}
