import React, { Component } from "react";
import "./App.css";
import Table from "./Table";
import TablePureComponent from "./TablePure";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: [
        {
          id: 0
        }
      ]
    };

    this.handleAddRow = this.handleAddRow.bind(this);
  }

  handleAddRow() {
    const { rows } = this.state;

    this.setState({
      rows: rows.concat([{ id: rows.length }])
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <button onClick={this.handleAddRow.bind(this)}>Add row</button>
          <div className="container__item">
            <Table rows={this.state.rows} />
            <TablePureComponent rows={this.state.rows} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
