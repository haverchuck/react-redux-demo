import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    'padding-left': 0
  },
  gridList: {
    width: 500,
    height: 450,
    overflow: 'none',
  },
  text: {
    color: "white",
    weight: "bold"
  },
  img: {
    opacity: .4,
  }
};

class DynamicGridList extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={180}
          style={styles.gridList}
        >
          <Subheader>
          {this.props.actionButtons[0]}
          {this.props.header}
          </Subheader>
          {this.props.tiles.map((tile, idx) => (
            <GridTile
              titleBackground='rgba(0, 0, 0, 0.7)'
              titleStyle={styles.text}
              subtitleStyle={styles.text}
              key={idx}
              title={tile.name}
              subtitle={<span><b>{tile.type}</b></span>}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
            >
              <img src={tile.img} style={styles.img} alt="gridimg"/>
            </GridTile>
          ))}
        </GridList>
      </div>
    )
  }
};

export default DynamicGridList;