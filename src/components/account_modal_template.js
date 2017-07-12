import React, { Component } from 'react';
import TextField from '../../node_modules/material-ui/TextField';

class AccountModalTemplate extends Component {

  constructor(props){
    super(props);
    this.state = {
      item: {},
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = () => {
    if (this.refs.name !== this.state.item.name || this.refs.type !== this.item.type) {
      this.props.action({name: this.refs.name.getValue(), type: this.refs.type.getValue()});
      this.setState({item: {name: this.refs.name.getValue(), type: this.refs.type.getValue()}})
    }
  }

  render() {
    return (
      <div>
        <TextField
          hintText="Account Name"
          floatingLabelText="Enter Account Name"
          ref="name"
          onChange={this.handleChange}
        /><br/>
        <TextField
          hintText="Account Type"
          floatingLabelText="Enter Account Type"
          ref="type"
          onChange={this.handleChange}
        />
      </div>
    )
  }
}


export default AccountModalTemplate;
