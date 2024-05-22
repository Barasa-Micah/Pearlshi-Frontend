import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

//Pages
import HomePage from './Pages/Home';


function App() {
  return (
    <>
      <HelmetProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;
