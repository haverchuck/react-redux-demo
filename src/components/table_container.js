import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const styles = {
  tableOverride: {
    overflow: 'none'
  }
}

class DynamicTable extends Component {

  constructor(props){
    super(props);
    this.state = {
      rows: this.props.rows,
      headers: this.props.headers
    }

  }

  render() {
    const headerValues = this.state.headers.map((label, idx) => {
      return <TableHeaderColumn key={idx}>{label}</TableHeaderColumn>
    });

    const dataValues = this.props.rows && this.props.rows.length > 0 ? this.props.rows.map((row, idx) => {
      let columnIndexes = Object.keys(row);
      let renderedRows = columnIndexes.map((col) => {
        return this.props.headers.indexOf(col) !== -1 ? <TableRowColumn key={`${idx}/${col}`}>{row[col]}</TableRowColumn> : null;
      })
      return <TableRow key={idx}>{renderedRows}</TableRow>
    }) : [];

    return (
      <Table wrapperStyle={styles.tableOverride}>
        <TableHeader displaySelectAll={false}>
          {headerValues}
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {dataValues}
        </TableBody>
      </Table>
    )
  }
};

export default DynamicTable;