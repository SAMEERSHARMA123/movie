
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import Search from './Components/Search';
import Watchlist from './Components/Watchlist';
import MovieDetails from './Components/MovieDetails';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Register from './Components/Register';
import Otp from './Components/Otp';

function AppLayout() {
  const location = useLocation();
  const hideNav = location.pathname === '/' || location.pathname === '/register';
  return (
    <div className="App">
      {!hideNav && <Navigation />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
