import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Homepage from './Pages/Homepage';
import Gallery from './Pages/Gallery';
import Weddings from './Pages/Weddings';
import Corprate from './Pages/Co-oprate Events';
import Birthdays from './Pages/Birthdays';
import TraditionalEvents from './Pages/Traditional Events';
import CorprateEvents from './Pages/Co-oprate Events';



function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        
        <Route  path="/gallery" element={<Gallery />} />

        <Route  path="/weddings" element={<Weddings />} />

        <Route path='/birthdays' element={<Birthdays />} />

        <Route path='/corprateevents' element={<CorprateEvents />} />

        <Route path='/traditionalevents' element={<TraditionalEvents />} />



      </Routes>
    </Router>
    </>
  );
}

export default App;
