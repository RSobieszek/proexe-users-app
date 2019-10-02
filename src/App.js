import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/add' component={AddUser} />
          <Route path='/edit/:id' component={EditUser} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
