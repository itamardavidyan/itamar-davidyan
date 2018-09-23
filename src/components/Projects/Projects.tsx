import * as React from "react";

export default class HelloWorld extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <section className="section" id="projects">
        <header className="section-header">
          <div className="small-container">
            <h2>Projects</h2>
            <p>Some projects I made in my free time.</p>
            <p>
              <a href="https://github.com/itamardavidyan" className="button">
                View GitHub
              </a>
            </p>
          </div>
        </header>
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>Project</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://taniarascia.github.io/new-moon/"
                    target="_blank"
                  >
                    New Moon
                  </a>
                </td>
                <td>A dark syntax theme optimized for web development.</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://taniarascia.github.io/primitive"
                    target="_blank"
                  >
                    Primitive
                  </a>
                </td>
                <td>
                  A Sass starterpack that provides helpful, browser-consistent
                  styling for UI elements.
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://taniarascia.github.io/coffee"
                    target="_blank"
                  >
                    Cafetography
                  </a>
                </td>
                <td>
                  A project to keep track of the flavor and ambiance of all the
                  coffeeshops that I write at.
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://taniarascia.com/music" target="_blank">
                    Ivory &amp; Ivory
                  </a>
                </td>
                <td>
                  A list of all my musical recordings, in which I sing and play
                  accordion.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}
