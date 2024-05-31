import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';


//Components
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop';


//Pages
import HomePage from './Pages/Home';
import ContactPage from './Pages/Contact';
import AboutUs from './Pages/AboutUs';


function App() {
  return (
    <>
      <HelmetProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/aboutUs" element={<AboutUs />} />
            <Route exact path="/connect" element={<ContactPage />} />
          </Routes>
          <ScrollToTop />
          <Footer />
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;
