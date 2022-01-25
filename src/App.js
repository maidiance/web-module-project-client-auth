import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Client Auth Project</h2>
      </div>
      <Switch>
        <PrivateRoute exact path='/friends/add' component={AddFriend} />
        <PrivateRoute exact path='/friends' component={FriendsList} />
        <Route path='/logout' component={Logout} />
        <Route path='/login' component={Login} />
        <Route path='/' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
