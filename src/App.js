import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import About from './pages/about';
import Careers from './pages/careers';
import Contact from './pages/contact';
import Services from './pages/services';
import Works from './pages/works';
import WhatsappButton from './components/whatsappButton'

function App() {
  return (
    <Router>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/services" element={<Services />} />
      <Route path="/works" element={<Works />} />
    </Routes>
    <Footer></Footer>
    <WhatsappButton/>
  </Router>
  );
}

export default App;
