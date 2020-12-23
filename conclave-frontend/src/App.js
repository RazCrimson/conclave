import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './store';
import Register from './containers/register'
import Login from './containers/login'
import HomeContainer from "./containers/home";
import NotFoundPage from "./components/NotFound";
import './App.css'
export default class App extends Component {

  render(){
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Router>
              {<Navbar/>}
                <Switch>
                <Route path = "/login" component = {Login}/>
                <Route path = "/register" component = {Register} />
                <Route exact path = "/">{HomeContainer}</Route>
                <Route component={NotFoundPage}/>
            </Switch>
            </Router>
        </PersistGate>
      </Provider>
    )
  }
}

