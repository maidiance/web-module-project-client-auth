import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Client Auth Project</h2>
      </div>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
