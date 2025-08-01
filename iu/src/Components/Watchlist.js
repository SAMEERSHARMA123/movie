import React from "react";
import "./Watchlist.css";

export default function Watchlist() {
  return (
    <div className="watchlist-root">
      <div className="watchlist-container">
        <div className="watchlist-header">
          <div className="watchlist-title-wrap">
            <span className="watchlist-heart-icon" />
            <h1 className="watchlist-title">My Watchlist</h1>
          </div>
          <p className="watchlist-count">0 movies in your watchlist</p>
        </div>

        <div className="watchlist-content">
          <div className="watchlist-empty">
            <span className="watchlist-empty-icon" />
            <h3 className="watchlist-empty-title">Your watchlist is empty</h3>
            <p className="watchlist-empty-desc">Add movies to your watchlist to watch them later</p>
            <a href="/search" className="watchlist-browse-btn">Browse Movies</a>
          </div>
        </div>
      </div>
    </div>
  );
} 