import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navigation from './components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <Router>
      <Navigation/>
      <div className="container p-4">
        <Route path="/"/>
      </div>
    </Router>
  );
}

export default App;
