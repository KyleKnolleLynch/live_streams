import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStream, deleteStream } from '../../actions';
import ModalOne from '../ModalOne';
import Button from '@material-ui/core/Button';
import history from '../../history';

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <div>
        <Button color="secondary" onClick={() => this.props.deleteStream(id)}>
          Delete
        </Button>
        <Button component={Link} to={'/'}>
          Cancel
        </Button>
      </div>
    );
  }

  render() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?';
    } else if (this.props.stream.userId === this.props.currentUserId) {
      return (
        <ModalOne
          title="Delete Stream"
          contentDesc={`Are you sure you want to delete the stream titled: ${
            this.props.stream.title
          }?`}
          actions={this.renderActions()}
          goBack={history.goBack}
        />
      );
    } else {
      return 'You need permission to delete this stream.';
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
  { fetchStream, deleteStream }
)(StreamDelete);
