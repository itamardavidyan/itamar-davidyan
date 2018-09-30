import * as React from "react";
declare var require: any;

export default class Skill extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: this.props.name,
      index: this.props.index
    };
  }

  public render() {
    return (
      <div className="card" key={this.props.index}>
        <img
          src={require("./icons/" + this.props.name + ".png")}
          alt={this.props.name}
        />
        <p className="skillTitle">{this.props.name}</p>
      </div>
    );
  }
}
