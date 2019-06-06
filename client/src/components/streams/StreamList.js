import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import VideoLibrary from '@material-ui/icons/VideoLibrary';

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <ListItem button key={stream.id}>
          <VideoLibrary />
          <ListItemText>{stream.title}</ListItemText>
          <ListItemText>{stream.description}</ListItemText>
        </ListItem>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <List>{this.renderList()}</List>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { streams: Object.values(state.streams) };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
