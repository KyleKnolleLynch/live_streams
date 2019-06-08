import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream, updateStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.updateStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return (
        <div>
          <h3>Loading...</h3>
        </div>
      );
    } else if (this.props.stream.userId === this.props.currentUserId) {
      const { title, description } = this.props.stream;
      return (
        <div>
          <h3>Edit a Stream</h3>
          <StreamForm
            initialValues={{ title, description }}
            onSubmit={this.onSubmit}
          />
        </div>
      );
    } else {
      return 'You must log-in for permission to edit this stream.';
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
    currentUserId: state.auth.userId
  };
};

export default connect(
  mapStateToProps,
  { fetchStream, updateStream }
)(StreamEdit);
