import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Homepage from './pages/homepage';
import Fish from './pages/fish';
import Bugs from './pages/bugs';
import SeaCreatures from './pages/seacreatures';
import Header from './components/header';
import Footer from './components/footer';
import Error from './pages/error';

export default function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/fish" element={<Fish />} />
        <Route path="/bugs" element={<Bugs />} />
        <Route path="/sea" element={<SeaCreatures />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </Router>
  );
}
