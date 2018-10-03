import * as React from "react";

export default class Contact extends React.Component<any, any> {
  public render() {
    return (
      <section className="text-center" id="contact">
        <header className="section-header">
          <div className="container small-container">
            <h2>Contact</h2>
            <p>
              I'd love to hear from you! Fill out the form below, email me at{" "}
              <a href="mailto:itamardavidyan@gmail.com">
                itamardavidyan@gmail.com
              </a>
              , or find me on
              <a
                href="https://www.linkedin.com/in/itamar-davidyan/"
                target="_blank"
              >
                {" "}
                LinkedIn
              </a>{" "}
              or
              <a href="https://github.com/itamardavidyan" target="_blank">
                {" "}
                GitHub
              </a>
              .
            </p>
          </div>
        </header>
        <div className="container small-container">
          <form
            action="https://formspree.io/itamardavidyan@gmail.com"
            method="post"
          >
            <label>Name</label>
            <input type="text" name="name" />
            <label>Email Address</label>
            <input type="email" name="_replyto" />
            <label>Message</label>
            <textarea name="message" />
            <input className="float-left" type="submit" value="Send" />
            <br />
            <br />
            <br />
          </form>
        </div>
      </section>
    );
  }
}
