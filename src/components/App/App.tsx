import * as React from "react";
import * as $ from "jquery";

import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import TechSkills from "../TechSkills/TechSkills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import BottomFooter from "../Footer/BottomFooter";
import SiteFooter from "../Footer/SiteFooter";

import "../style/style.scss";

// interface ComponentState {
//   section1: React.RefObject<Projects>;
// }

export default class App extends React.Component<any, any> {
  // public projRef: React.RefObject<Projects>;

  constructor(props: any) {
    super(props);
    // this.projRef = React.createRef();
  }

  projectsClick = (e: any) => {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#scrollToProjects").offset().top
      },
      500
    );
    // this.projRef.scrollIntoView({ block: "end", behavior: "smooth" });
  };

  contactClick = (e: any) => {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#scrollToContact").offset().top
      },
      500
    );
    // this.projRef.scrollIntoView({ block: "end", behavior: "smooth" });
  };

  render() {
    return (
      <React.Fragment>
        <header>
          <NavBar
            projectsClick={this.projectsClick}
            contactClick={this.contactClick}
          />
        </header>
        <main>
          <Header contactClick={this.contactClick} />
          <TechSkills />
          <div id="scrollToProjects"> </div>
          <Projects />
          <div id="scrollToContact"> </div>
          <Contact />
        </main>
        <SiteFooter />
        <BottomFooter />
      </React.Fragment>
    );
  }
}
