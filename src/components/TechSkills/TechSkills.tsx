import * as React from "react";
import Skill from "../TechSkills/Skill";
// import "./TechSkills.scss";

interface ComponentState {
  skills: Array<SkillsComp>;
}

interface SkillsComp {
  name: string;
}

export default class TechSkills extends React.Component<{}, ComponentState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      skills: [
        {
          name: "HTML5"
        },
        {
          name: "CSS3"
        },
        {
          name: "Sass"
        },
        {
          name: "JavaScript"
        },
        {
          name: "NodeJS"
        },
        {
          name: "jQuery"
        },
        {
          name: "ReactJS"
        },
        {
          name: "Bootstrap"
        },
        {
          name: "TypeScript"
        },
        {
          name: "Git"
        },
        {
          name: "Firebase"
        }
      ]
    };
  }

  renderSkills() {
    return this.state.skills.map((skill: SkillsComp, index: number) => {
      return <Skill name={skill.name} key={index} />;
    });
  }

  public render() {
    return (
      <section className="text-center">
        <div className="container small-container">
          <h2 className="jumbotron-heading">Technical Skills</h2>
          <p className="m-container lead text-muted">
            I specialize in front end development, with knowledge in system
            administration, back end development and design.
          </p>
        </div>
        <div className="container">
          <div className="flex skills">{this.renderSkills()}</div>
        </div>
      </section>
    );
  }
}
