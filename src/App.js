import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Homepage from './pages/homepage';
import About from './pages/about';
import Header from './components/header';
import Footer from './components/footer';

export default function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </Router>
);
}
