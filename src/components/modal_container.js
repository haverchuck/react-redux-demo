import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

/* modal content templates and actions */
import AccountModalTemplate from './account_modal_template';
import * as AccountActions from '../actions/accounts';
import UserModalTemplate from './user_modal_template';
import * as UserActions from '../actions/users';
import AddNodeModalTemplate from './add_node_modal_template';

class DynamicModal extends Component {

  constructor(props) {
    super(props);

    let template;

    switch(this.props.template){
      case 'addAccount':
        template = <AccountModalTemplate action={this.setItem}/>
        break;
      case 'addUser':
        template = <UserModalTemplate action={this.setItem} selectValues={this.props.selectValues} />
        break;
      case 'selectAccountForNode':
        template= <AddNodeModalTemplate action={this.setItem} selectValues={this.props.selectValues} rowInfo={this.props.rowInfo} />
    }

    this.state = {
      open: false,
      template: template
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setItem = this.setItem.bind(this);
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  setItem = (item) => {
    this.setState({item});
  }

  handleSubmit = () => {
    let item = this.state.item;
    if (this.props.img){
      item.img = this.props.img;
    }
    this.props.submission(item);
    this.setState({open: false})
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleSubmit}
      />,
    ];

    return (
      <div>
        <RaisedButton label={this.props.label} onTouchTap={this.handleOpen} style={this.props.style} primary={true} />
        <Dialog
          title={this.props.title}
          actions={actions}
          modal={true}
          item={this.state.item}
          open={this.state.open}
          children={this.state.template}
        >
        </Dialog>
      </div>
    );
  }
};

function mapStateToProps(state, props) {
  return {
    item: state.item
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(AccountActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DynamicModal);