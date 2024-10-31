import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Stats from './pages/Stats';

 export default function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/stats" element={<Stats />} />
          </Routes>
      </Router>
  )
};
