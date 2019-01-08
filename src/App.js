import React, { Component } from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Header from './components/Header/Header';

import AddImageContainer from './containers/AddImageContainer'
import EditImageContainer from './containers/EditImageContainer'
import ImagesListContainer from './containers/ImagesListContainer'
import redusers from './redusers/index';

const store = createStore(redusers, composeWithDevTools(
  applyMiddleware(thunk)
));


class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={ImagesListContainer}/>
              <Route exact path='/images/:id' component={EditImageContainer}/>
              <Route exact path='/addImage' component={AddImageContainer}/>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
