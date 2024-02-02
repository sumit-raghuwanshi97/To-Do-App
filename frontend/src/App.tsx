import React from 'react';
import Header from './presentation/assests/components/containers/header/header';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Footer from './presentation/assests/components/containers/footer/footer';
import TaskFrom from './presentation/assests/components/components/TaskForm/TaskFrom';
import TaskScreen from './presentation/assests/components/screens/TaskScreen';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
     <Router>
      <Header/>
      <TaskFrom/>
      <TaskScreen/>
      <Footer/>
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
