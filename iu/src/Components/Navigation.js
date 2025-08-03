import React from "react";
import "./Navigation.css";
import { Link, useNavigate } from 'react-router-dom';
import { Search, Bell, CircleUserRound } from 'lucide-react';

export default function Navigation() {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/search');
  };

  return (
    <header className="nav-header">
      <nav className="nav-container">
        <div className="nav-left">
          <Link to="/home" className="nav-logo">
            FilmHub
          </Link>
          
          <ul className="nav-menu">
            <li><Link to="/home" className="nav-link">Home</Link></li>
            <li><Link to="/search" className="nav-link">Movies</Link></li>
            <li><Link to="/watchlist" className="nav-link">My List</Link></li>
          </ul>
        </div>

        <div className="nav-right">
          <form className="nav-search" onSubmit={e => { e.preventDefault(); }}>
           
            
          </form>

          {/* Mobile Search Icon - Only visible on mobile */}
          <button className="nav-mobile-search-btn" onClick={handleSearchClick} title="Search">
            <Search size={20} color="#fff" />
          </button>

          <button className="nav-btn" title="Bell">
            <Bell size={20} color="#fff" />
          </button>

          <button className="nav-btn" title="Profile">
            <CircleUserRound size={20} color="#fff" />
          </button>

          <button className="nav-mobile-btn">
            <span className="menu-icon" />
          </button>
        </div>
      </nav>
    </header>
  );
} 