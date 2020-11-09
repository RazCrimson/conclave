import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './store';
import Register from './components/auth/register'
import Login from './containers/login'
import './App.css'
export default class App extends Component {

  render(){
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Router>
              {/*<Navbar/>*/}
                <Switch>
                <Route path = "/login" component = {Login}/>
                {/*<Route path = "/register" component = {Register} />*/}
              </Switch>
            </Router>
        </PersistGate>
      </Provider>
    )
  }
}

