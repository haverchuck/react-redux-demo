import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from '../images/greedo.jpg'
import ReactLogo from '../images/react-redux.png'

const styles = {
  wrapper: {
    'margin-top': '5%',
    'margin-left': '20%',
    'margin-right': '20%',
  }
};

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: 1
    }
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div style={styles.wrapper}>
        <Card>
          <CardHeader
            title="Dustin Noyes"
            subtitle="React.js Developer"
            avatar={Avatar}
          />
          <CardMedia
            overlay={<CardTitle title="Demo App" subtitle="React, Redux and Material Design" />}
          >
            <img src={ReactLogo} alt="react logo" />
          </CardMedia>
          <CardText>
            This is a demo project for React and Redux.  It was scaffolded with the create-react-app library and uses Material UI as a styling framework.
          </CardText>
        </Card>
      </div>
    )
  }
}


export default Main;
