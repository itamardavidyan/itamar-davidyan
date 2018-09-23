import * as React from "react";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import TechSkills from "../TechSkills/TechSkills";
import Projects from "../Projects/Projects";

export default function() {
  return (
    <React.Fragment>
      <header>
        <NavBar />
      </header>
      <main>
        <Header />
        <TechSkills />
        <Projects />
      </main>
    </React.Fragment>
  );
}
