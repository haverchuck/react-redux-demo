import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import DynamicGridList from './gridlist_container';
import DynamicModal from './containers/modal_container'
import * as AccountActions from '../actions/accounts';
import Puppies from '../images/puppies.jpg';

const styles = {
  accountButton: {
    'float': 'left',
    'box-shadow': 'none'
  },
  wrapper: {
    'margin-top': '5%',
    'margin-left': '20%',
    'margin-right': '20%',
  }
};

class Accounts extends Component {

  constructor(props){
    super(props);
    this.state = {
      accounts: this.props.accounts
    }
  }

  componentDidMount() {
    this.props.action.fetchAccountsIfNeeded();
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.selectedSubreddit !== prevProps.selectedSubreddit) {
  //     const { dispatch, selectedSubreddit } = this.props
  //     dispatch(fetchPostsIfNeeded(selectedSubreddit))
  //   }
  // }

  render() {
    return (
      <div style={styles.wrapper}>
        <DynamicGridList tiles={this.props.accounts} header="Accounts" actionButtons={[<DynamicModal style={styles.accountButton} label="Add Account" title="Define New Account" submission={this.props.action.addToAccounts} img={Puppies} template='addAccount' />]}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    accounts: state.accounts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(AccountActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);
