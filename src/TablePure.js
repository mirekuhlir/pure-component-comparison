import React from "react";

import Button from "./Button";

class TableRow extends React.PureComponent {
  render() {
    return (
      <tr>
        <td>{this.props.title}</td>
        <td>
          <Button />
        </td>
      </tr>
    );
  }
}

export default class TablePure extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          {this.props.rows.map((id, title) => (
            <TableRow key={id} title={title} />
          ))}
        </tbody>
      </table>
    );
  }
}
