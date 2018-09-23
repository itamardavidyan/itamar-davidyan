import * as React from "react";

export default class HelloWorld extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: this.props.name,
      src: this.props.src,
      index: this.props.index
    };
  }

  public render() {
    return (
      <div className="card" key={this.props.index}>
        <img src={this.props.src} alt={this.props.name} />
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}
