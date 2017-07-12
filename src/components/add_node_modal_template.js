import React, { Component } from 'react';
import TextField from '../../node_modules/material-ui/TextField';
import SelectField from '../../node_modules/material-ui/SelectField';
import MenuItem from '../../node_modules/material-ui/MenuItem';

class AddNodeModalTemplate extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: ''
    }
    this.processChange = this.processChange.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }

  processChange = (node) => {
    this.props.action({rowInfo: this.props.rowInfo, newNode: node});
  }

  handleSelection = (e, index, val) => {
    if (val !== this.state.title) {
      this.setState({title: val})
      this.state.title = val;
      this.processChange(this.state)
    }
  }

  render() {

    const availableAccounts = this.props.selectValues && this.props.selectValues.length > 0 ? this.props.selectValues.map((account, idx) => {
      return <MenuItem value={account.name} primaryText={account.name}  />;
    }) : [];

    return (
      <div>
        <SelectField
          value={this.state.title}
          floatingLabelText="Select Account"
          ref="title"
          onChange={this.handleSelection}
        >
        {availableAccounts}
        </SelectField>
      </div>
    )
  }
}


export default AddNodeModalTemplate;
