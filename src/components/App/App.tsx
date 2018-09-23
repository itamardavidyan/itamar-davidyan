import * as React from "react";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import TechSkills from "../TechSkills/TechSkills";

export default function() {
  return (
    <React.Fragment>
      <header>
        <NavBar />
      </header>
      <main>
        <Header />
        <TechSkills />
      </main>
    </React.Fragment>
  );
}
