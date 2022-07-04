import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Homepage from './pages/homepage';
import Fish from './pages/fish';
import FishDetail from './pages/fishdetail';
import Bugs from './pages/bugs';
import BugDetail from './pages/bugdetail';
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
        <Route exact path="/fish/:id" element={<FishDetail />} />
        <Route path="/bugs" element={<Bugs />} />
        <Route path="/bugs/:id" element={<BugDetail />} />
        <Route path="/sea" element={<SeaCreatures />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </Router>
  );
}
