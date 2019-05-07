import React from 'react';
import './App.css';
import {Route, BrowserRouter} from 'react-router-dom';

import Dashboard from './comopnents/dashboard/Dashboard';
import SignIn from './comopnents/auth/SignIn';
import Questions from './comopnents/dashboard/Questions';
function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Route exact path='/' component={Dashboard} />
            <Route path='/signin' component={SignIn} />
            <Route path='/questions' component={Questions} />
        </div>
    </BrowserRouter>
  );
}

export default App;
