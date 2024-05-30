import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Homepage from './Pages/Homepage';
import Gallery from './Pages/Gallery';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        
        <Route  path="/gallery" element={<Gallery />} />

      </Routes>
    </Router>
    </>
  );
}

export default App;
