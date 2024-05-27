import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

//Pages
import HomePage from './Pages/Home';
import ContactPage from './Pages/Contact';
import AboutUs from './Pages/AboutUs';


function App() {
  return (
    <>
      <HelmetProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/aboutUs" element={<AboutUs />} />
            <Route exact path="/connect" element={<ContactPage />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;
