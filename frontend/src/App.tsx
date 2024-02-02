import React from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
      <h1 className='text-3xl'>To-Do-App</h1>
      <div className="container">
        <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </div>
     </Router>
    </div>
  );
}

export default App;
