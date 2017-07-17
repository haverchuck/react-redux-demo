import React, { Component } from 'react';
import { TextField, SelectField, MenuItem } from '../../../node_modules/material-ui';
// import SelectField from '../../node_modules/material-ui/SelectField';
// import MenuItem from '../../node_modules/material-ui/MenuItem';

class UserModalTemplate extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      org: ''
    }
    this.processChange = this.processChange.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }

  processChange = () => {
    this.props.action({name: this.state.name, org: this.state.org});
  }

  //TODO: investigate why this.setState was not working in below functions
  handleName = (e, val) => {
    if (val !== this.state.name) {
      this.state.name = val
      this.processChange()
    }
  }

  handleSelection = (e, index, val) => {
    if (val !== this.state.org) {
      this.setState({org: val})
      this.state.org = val;
      this.processChange()
    }
  }

  render() {

    const availableAccounts = this.props.selectValues && this.props.selectValues.length > 0 ? this.props.selectValues.map((account, idx) => {
      return <MenuItem value={account.name} primaryText={account.name}  />;
    }) : [];

    return (
      <div>
        <TextField
          hintText="User Name"
          floatingLabelText="Enter User Name"
          ref="name"
          onChange={this.handleName}
        /><br/>
        <SelectField
          value={this.state.org}
          floatingLabelText="Select User Organization"
          ref="org"
          onChange={this.handleSelection}
        >
        {availableAccounts}
        </SelectField>
      </div>
    )
  }
}


export default UserModalTemplate;
