import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DynamicModal from './containers/modal_container';
import DynamicTable from './table_container';
import * as UserActions from '../actions/users';

const styles = {
  userButton: {
    float: 'left'
    
  },
  wrapper: {
    'margin-top': '5%',
    'margin-left': '20%',
    'margin-right': '20%',
  },
  table: {
    float: 'left',
    overflow: 'none'
  }
};

class Users extends Component {

  constructor(props){
    super(props);
    this.state = {
      users: this.props.users,
      headers: ['name', 'org'],
    }
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <DynamicModal style={styles.userButton} label="Add User" title="Define New User" submission={this.props.action.addToUsers} template="addUser" selectValues={this.props.accounts}/>
        <DynamicTable headers={this.state.headers} rows={this.props.users}/>
      </div>
    )
  }
}
function mapStateToProps(state, props) {
  return {
    users: state.users,
    accounts: state.accounts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(UserActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);