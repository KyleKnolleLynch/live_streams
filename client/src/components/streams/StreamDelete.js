import React from 'react';
import ModalOne from '../ModalOne';
import Button from '@material-ui/core/Button';
import history from '../../history';


const StreamDelete = () => {
  const actions = (
    <div>
      <Button color="secondary">Delete</Button>
      <Button onClick={() => history.push('/')}>Cancel</Button>
    </div>
  )

  const goBack = (
    () => history.push('/')
  )



  return (
    <div>
      <ModalOne 
        title="Delete Stream"
        modalDesc="Click below to delete this stream"
        contentDesc="Are you sure you want to delete this stream?"
        actions={actions}
        goBack={goBack}
      />
    </div>
  );
};

export default StreamDelete;
