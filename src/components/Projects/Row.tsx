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
          <a href="https://taniarascia.github.io/new-moon/" target="_blank">
            New Moon
          </a>
        </td>
        <td>A dark syntax theme optimized for web development.</td>
      </tr>
    );
  }
}
