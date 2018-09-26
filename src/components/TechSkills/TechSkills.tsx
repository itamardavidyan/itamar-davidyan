import * as React from "react";
import Skill from "../TechSkills/Skill";
import "./TechSkills.scss";

interface ComponentState {
  skills: Array<SkillsComp>;
}

interface SkillsComp {
  src: string;
  name: string;
}

export default class TechSkills extends React.Component<{}, ComponentState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      skills: [
        {
          src:
            "http://www.stickpng.com/assets/images/5847f5bdcef1014c0b5e489c.png",
          name: "html"
        },
        {
          src:
            "https://cdn.freebiesupply.com/logos/large/2x/css-3-logo-png-transparent.png",
          name: "css"
        },
        {
          src:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png",
          name: "sass"
        },
        {
          src:
            "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
          name: "JavaScript"
        },
        {
          src:
            "http://pluspng.com/img-png/nodejs-logo-png-create-a-model-to-persist-data-in-a-node-js-loopback-api-from-beeman-nl-on-eggheadio-1200.png",
          name: "NodeJS"
        },
        {
          src:
            "http://infoxit.com.np/wp-content/uploads/2016/11/jquery-icon.png",
          name: "jQuery"
        },
        {
          src:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png",
          name: "ReactJS"
        },
        {
          src:
            "https://cdn.freebiesupply.com/logos/large/2x/bootstrap-4-logo-png-transparent.png",
          name: "Bootstrap"
        },
        {
          src: "https://rynop.files.wordpress.com/2016/09/ts.png?w=816",
          name: "TypeScript"
        },
        {
          src: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
          name: "git"
        },
        {
          src:
            "http://www.stickpng.com/assets/images/5847f40ecef1014c0b5e488a.png",
          name: "Firebase"
        }
      ]
    };
  }

  renderSkills() {
    return this.state.skills.map((skill: SkillsComp, index: number) => {
      return <Skill name={skill.name} src={skill.src} key={index} />;
      // return <p key={index}>{skill.name + " - " + skill.src}</p>;
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
