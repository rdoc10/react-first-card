import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import propTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';

class AppCard extends Component {

  static propTypes = {
    card: propTypes.object.isRequired,
    updateLikes: propTypes.func.isRequired
  }

  render() {
    return(
      <Card className = 'card'>
        <CardHeader title = { this.props.card.author }
                    avatar = { this.props.card.author_url }
                    subtitle = { `${this.props.card.read_time} minutes read` } />

        <CardMedia className = 'media' overlay = { <CardTitle title = { this.props.card.title } /> } >
          <img className = 'image' src = {this.props.card.image_url} alt = {this.props.card.title} />
        </CardMedia>

        <CardText>
          { this.props.card.description }
        </CardText>

        <CardActions>
          <FlatButton label = {`${this.props.card.likes} likes`} onClick = {() => (this.props.updateLikes(this.props.card))} />
        </CardActions>

      </Card>

    );
  }
}

export default AppCard;
