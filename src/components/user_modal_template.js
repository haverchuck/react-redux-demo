import React, { Component } from 'react';
import TextField from '../../node_modules/material-ui/TextField';
import SelectField from '../../node_modules/material-ui/SelectField';
import MenuItem from '../../node_modules/material-ui/MenuItem';

class UserModalTemplate extends Component {

  constructor(props){
    super(props);
    this.state = {
      item: {},
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = () => {
    if (this.refs.name !== this.state.item.name || this.refs.org !== this.item.org) {
      this.props.action({name: this.refs.name.getValue(), org: this.refs.org.getValue()});
      this.setState({item: {name: this.refs.name.getValue(), org: this.refs.org.getValue()}})
    }
  }

  render() {

    const availableAccounts = this.props.accounts && this.props.accounts.length > 0 ? this.props.accounts.map((account, idx) => {
      return <MenuItem value={account.name} primaryText={account.name}  />;
    }) : [];

    return (
      <div>
        <TextField
          hintText="User Name"
          floatingLabelText="Enter User Name"
          ref="name"
          onChange={this.handleChange}
        /><br/>
        <SelectField
          floatingLabelText="Select User Organization"
          ref="org"
          onChange={this.handleChange}
        >
        {availableAccounts}
        </SelectField>
      </div>
    )
  }
}


export default UserModalTemplate;
