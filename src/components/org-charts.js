import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SortableTree from 'react-sortable-tree';
import * as OrgChartActions from '../actions/org-charts';


const styles = {
  wrapper: {
    'margin-top': '5%',
    'margin-left': '20%',
    'margin-right': '20%',
  }
};

class OrgCharts extends Component {

    constructor(props) {
        super(props);
 
        this.state = {
            treeData: [{ title: 'Chicken', children: [ { title: 'Egg' } ] }],
        };
    }
 
    render() {
        return (
          <div style={styles.wrapper}>
            <div style={{ height: 400 }}>
                <SortableTree
                    treeData={this.state.treeData}
                    onChange={treeData => this.setState({ treeData })}
                />
            </div>
          </div>
        );
    }
    
}
function mapStateToProps(state) {
  return {
    accounts: state.accounts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(OrgChartActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrgCharts);
