import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Gallery from './Pages/Gallery';
import Weddings from './Pages/Weddings';
import CorprateEvents from './Pages/Corprate Events';
import Birthdays from './Pages/Birthdays';
import TraditionalEvents from './Pages/Traditional Events';
import All from './Pages/All';




function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Gallery />} />

        <Route  path="/all" element={<All />} />

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
