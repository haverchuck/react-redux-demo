import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SortableTree from 'react-sortable-tree';
import { removeNodeAtPath, getNodeAtPath, addNodeUnderParent } from 'react-sortable-tree';
import RaisedButton from 'material-ui/RaisedButton';
import DynamicModal from './modal_container'
import * as OrgChartActions from '../actions/org-charts';
import _ from 'lodash';


const styles = {
  wrapper: {
    'margin-top': '5%',
    'margin-left': '20%',
    'margin-right': '20%',
  },
  innerStyle: {
    'padding-left': 200,
    'padding-right': 200
  },
  addButton: {
    float:'left',
    'margin-left': -25
  },
};

class OrgCharts extends Component {

    constructor(props) {
        super(props);
        this.state = {
          treeData: this.props.treeData
        }
        this.removeNode = this.removeNode.bind(this);
        this.addNode = this.addNode.bind(this);
    }

    removeNode = (rowInfo) => {
      let {node, treeIndex, path} = rowInfo;
      let tempTreeData = removeNodeAtPath({
        treeData: this.state.treeData,
        path: path,   // You can use path from here
        getNodeKey: ({node: TreeNode, treeIndex: number}) => {
        // console.log(number);
          return number;
        },
        ignoreCollapsed: false,
      })
      this.props.action.addNode(tempTreeData);
    }

    // tree library seems to have helper functions for this, but they were giving me trouble.  this function might help with more sophisticated parsing needed later. still testing.
    
    addNode = (item) => {   
      let {node, treeIndex, path} = item.rowInfo;
      let newNode = item.newNode;

      if (!node.children){
        node.children = [newNode]
      } else {
        node.children.push(newNode)
      }

      this.setState(this.state.treeData)
      this.props.action.updateTree(this.state.treeData)
      }
 
    render() {
        return (
          <div style={styles.wrapper}>
            <div style={{ height: 400 }}>
                <SortableTree
                    innerStyle={styles.innerStyle}
                    treeData={this.state.treeData}
                    onChange={treeData => this.setState({ treeData })}
                     generateNodeProps={rowInfo => ({
                        buttons: [
                            <div>
                              <DynamicModal style={styles.addButton} label="Add" title="Add Account to Org" submission={this.addNode} template='selectAccountForNode' selectValues={this.props.accounts} rowInfo={rowInfo} />
                            </div>
                        ],
                        style: {
                          height: '50px',
                        }
                      })}
                />
            </div>
          </div>
        );
    }
    
}
function mapStateToProps(state) {
  return {
    accounts: state.accounts,
    users: state.users,
    treeData: state.treeData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(OrgChartActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrgCharts);
