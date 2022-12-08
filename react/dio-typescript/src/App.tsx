import { Home } from './pages/home'
import { Login } from './pages/login'
import { Feed } from './pages/feed'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Register } from './pages/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  );
}

export default App;
