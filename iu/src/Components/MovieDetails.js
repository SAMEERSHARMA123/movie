import React from "react";
import "./MovieDetails.css";
import { Link } from 'react-router-dom';
import { Play, Plus } from 'lucide-react';

export default function MovieDetails() {
  return (
    <div className="movie-details-root">
      <div className="movie-hero">
        <img
          src="https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
          alt="Movie background"
          className="movie-hero-img"
        />
        <div className="movie-hero-overlay" />
        
        <Link to="/home" className="movie-back-btn">
          <span className="back-icon" />
          <span>Back</span>
        </Link>
      </div>

      <div className="movie-content">
        <div className="movie-container">
          <div className="movie-poster-wrap">
            <img
              src="https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
              alt="Movie poster"
              className="movie-poster"
            />
          </div>

          <div className="movie-info">
            <h1 className="movie-title">The Dark Knight</h1>

            <div className="movie-meta">
              <div className="movie-rating">
                <span className="star-icon" />
                <span>9.0</span>
              </div>
              <span>2008</span>
              <span>Action</span>
              <span>152 min</span>
            </div>

            <p className="movie-desc">
              When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.
            </p>

            <div className="movie-actions">
              <button className="movie-play-btn">
                <Play size={20} style={{marginRight: 8}} />
                <span>Play</span>
              </button>

              <button className="movie-list-btn">
                <Plus size={20} style={{marginRight: 8}} />
                <span>Add to My List</span>
              </button>
            </div>

            <div className="movie-details-grid">
              <div className="detail-item">
                <h3 className="detail-label">Genre</h3>
                <p>Action</p>
              </div>
              
              <div className="detail-item">
                <h3 className="detail-label">Release Year</h3>
                <p>2008</p>
              </div>
              
              <div className="detail-item">
                <h3 className="detail-label">Duration</h3>
                <p>152 min</p>
              </div>

              <div className="detail-item">
                <h3 className="detail-label">Rating</h3>
                <div className="rating-display">
                  <span className="star-icon" />
                  <span>9.0/10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 