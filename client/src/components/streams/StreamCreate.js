import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';

class StreamCreate extends Component {
  renderError({ error, touched }) {
    if (error && touched) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <FormControl
        style={{ marginTop: '10px', padding: '10px' }}
        variant="outlined"
        fullWidth
        error={meta.touched && meta.error}
      >
        <InputLabel htmlFor="component-outlined">{label}</InputLabel>
        <OutlinedInput id="component-outlined" {...input} />
        {this.renderError(meta)}
      </FormControl>
    );
  };

  onSubmit = (formValues) => {
   this.props.createStream(formValues);
  }

  render() {
    return (
      <Grid container direction="column" justify="center" align="center">
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            name="title"
            component={this.renderInput}
            label="Enter Title"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter Description"
          />
          <br />
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            style={{ marginTop: '1rem' }}
          >
            Submit
          </Button>
        </form>
      </Grid>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'Please enter a Title.';
  }

  if (!formValues.description) {
    errors.description = 'Please enter a description.';
  }
  return errors;
};

const formWrapped = reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
