import React, { Component } from 'react';
//import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Contacts from './Components/contacts/contacts'
import Header from './Components/layout/header'
import AddContact from './Components/contacts/addcontact'
import EditContact from './Components/contacts/editcontact'
import About from './Components/pages/about'
import NotFound from './Components/pages/notfound'
import Test from './Components/test/test'

import  {Provider} from './context'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router basename = {process.env.PUBLIC_URL}>
          <div className="App">
            <Header branding = "Contact Manager" />
              <Switch>
                <Route exact path='/'
                       component = {Contacts}
                />
                <Route exact path='/contact/add'
                       component = {AddContact}
                />
                <Route exact path='/contact/edit/:_id'
                       component = {EditContact}
                />
                <Route exact path='/about'
                       component = {About}
                />
                <Route exact path='/test'
                       component = {Test}
                />
                <Route component={NotFound}/>
              </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
