import * as React from "react";

export default class Row extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      src: this.props.src,
      title: this.props.title,
      desc: this.props.desc
    };
  }

  public render() {
    return (
      <tr>
        <td>
          <a href={this.props.src} target={this.props.src}>
            {this.props.title}
          </a>
        </td>
        <td>{this.props.desc}</td>
      </tr>
    );
  }
}
