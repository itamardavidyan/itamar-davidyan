import * as React from "react";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import TechSkills from "../TechSkills/TechSkills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import BottomFooter from "../Footer/BottomFooter";
import SiteFooter from "../Footer/SiteFooter";

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
        <Contact />
      </main>
      <SiteFooter />
      <BottomFooter />
    </React.Fragment>
  );
}
