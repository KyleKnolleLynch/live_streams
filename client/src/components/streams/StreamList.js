import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import VideoLibrary from '@material-ui/icons/VideoLibrary';
import Button from '@material-ui/core/Button';
import Delete from '@material-ui/icons/Delete';
import Create from '@material-ui/icons/Create';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div style={{ marginLeft: 'auto' }}>
          <Button
            component={Link}
            to={`/streams/edit/${stream.id}`}
            variant="outlined"
            style={{ color: 'grey' }}
          >
            Edit
            <Create color="action" />
          </Button>
          <Button
            component={Link}
            to={`/streams/delete/${stream.id}`}
            variant="outlined"
            color="secondary"
          >
            Delete
            <Delete />
          </Button>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <ListItem key={stream.id} style={{ marginTop: '0.5rem' }} divider>
          <VideoLibrary />
          <Link
            to={`/streams/${stream.id}`}
            style={{ textDecoration: 'none', color: '#000' }}
          >
            <ListItemText
              primary={stream.title}
              secondary={
                <Fragment>
                  <Typography
                    component="span"
                    color="textPrimary"
                    variant="body2"
                  >
                    {stream.description}
                  </Typography>
                </Fragment>
              }
              style={{ padding: '0 1rem' }}
            />
          </Link>
          {this.renderAdmin(stream)}
        </ListItem>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn === true) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Fab
            component={Link}
            to="/streams/new"
            variant="extended"
            size="small"
            color="primary"
          >
            Create Stream
          </Fab>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <List>{this.renderList()}</List>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
