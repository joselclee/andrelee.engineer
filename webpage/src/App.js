import './App.css';

import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Games from './components/pages/Games';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/Games" element={<Games/>}></Route>
        </Routes>
      </Router>

    </div>

  );
}

export default App;
