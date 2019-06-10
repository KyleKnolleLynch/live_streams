import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamView from './streams/StreamView';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <Router history={history}>
      <Header />
      <div>
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" component={StreamCreate} />
        <Route path="/streams/delete/:id" component={StreamDelete} />
        <Route path="/streams/edit/:id" component={StreamEdit} />
        <Route path="/streams/view" component={StreamView} />
      </div>
    </Router>
  );
};

export default App;
