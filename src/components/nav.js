import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import MenuItem from '../../node_modules/material-ui/MenuItem';
import DropDownMenu from '../../node_modules/material-ui/DropDownMenu';
import RaisedButton from '../../node_modules/material-ui/RaisedButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';

class Nav extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: 1
    }
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu value={this.state.value} onChange={this.handleChange} openImmediately={false}>
            <MenuItem value={1} 
              primaryText="Home"
              containerElement={<Link to="/" />}
            />
            <MenuItem value={2} 
              primaryText="Accounts"
              containerElement={<Link to="/accounts" />}
            />
            <MenuItem value={3} 
              primaryText="Users"
              containerElement={<Link to="/users" />}
            />
            <MenuItem value={4} 
              primaryText="Org Charts"
              containerElement={<Link to="/org-charts" />}
            />
          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
            <RaisedButton label="Logout" secondary={true} />
        </ToolbarGroup>
      </Toolbar>
    )
  }
}


export default Nav;
