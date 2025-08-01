import React from "react";
import "./NotFound.css";
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="notfound-root">
      <div className="notfound-card">
        <div className="notfound-img-wrap">
          <img
            src="https://image.tmdb.org/t/p/w200/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
            alt="Movie poster"
            className="notfound-img"
          />
          <div className="notfound-img-overlay">
            <span className="notfound-film-icon" />
          </div>
        </div>
        <h1 className="notfound-title">404</h1>
        <h2 className="notfound-subtitle">Page Not Found</h2>
        <p className="notfound-desc">
          The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        <Link to="/home" className="notfound-home-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
}