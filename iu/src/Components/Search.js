import React, { useState, useEffect } from "react";
import "./Search.css";
import { ListFilter, Star, Clock, Play, X } from 'lucide-react';
import axios from "axios";

export default function Search() {
  const [text, setText] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [selectedTrailer, setSelectedTrailer] = useState(null);

  // Function to extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    
    // Handle different YouTube URL formats
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube\.com\/v\/([^&\n?#]+)/,
      /youtube\.com\/user\/[^\/]+#p\/[a-z]\/[0-9]+\/([^&\n?#]+)/
    ];
    
    for (let pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1] && match[1].length === 11) {
        return match[1];
      }
    }
    
    return null;
  };

  // Function to open trailer modal
  const openTrailer = (trailerUrl) => {
    console.log('Opening trailer with URL:', trailerUrl);
    const videoId = getYouTubeVideoId(trailerUrl);
    console.log('Extracted video ID:', videoId);
    
    if (videoId) {
      setSelectedTrailer(videoId);
    } else {
      alert('Invalid YouTube URL. Please check the trailer link.');
    }
  };

  // Function to close trailer modal
  const closeTrailer = () => {
    setSelectedTrailer(null);
  };

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && selectedTrailer) {
        closeTrailer();
      }
    };

    if (selectedTrailer) {
      document.addEventListener('keydown', handleEscKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [selectedTrailer]);

   const moviesSearch = async(e) => {
    e.preventDefault();
    if(!text.trim()) {return}
    
    setLoading(true);
    setSearched(true);
    
    try{
      const response = await axios.get(`http://localhost:5000/api/users/search?name=${text}`);
      console.log(response.data);
      setMovies(response.data || []);
    }
    catch(err){
        console.log(err);
        setMovies([]);
        alert('Search failed: ' + err.message);
    }
    finally {
      setLoading(false);
    }
   }
  return (
    <div className="search-root">
      <div className="search-container">
        <div className="search-header">
          <h1 className="search-title">Search Movies</h1>
          
          <form className="search-form" onSubmit={moviesSearch}>
            <div className="search-input-wrap">
              <input
                type="text"
                placeholder="Search for movies..."
                className="search-input"
                value={text}
                onChange={(q)=>{setText(q.target.value)}}
              />
            </div>
            <button type="submit" className="search-btn">
              {loading ? 'Searching...' : 'Search'}
            </button>
          </form>

          <div className="search-filters">
            <button className="filter-btn">
              <ListFilter size={18} style={{marginRight: 8}} />
              <span>Filters</span>
            </button>
          </div>
        </div>

        <div className="search-results">
          {searched && (
            <div className="search-count">
              {loading ? 'Searching...' : `${movies.length} movies found`}
            </div>
          )}
          
          {loading && (
            <div className="search-loading">
              <div className="loading-spinner"></div>
              <p>Searching for movies...</p>
            </div>
          )}

          {!loading && searched && movies.length === 0 && (
            <div className="search-empty">
              <span className="search-empty-icon" />
              <h3 className="search-empty-title">No movies found</h3>
              <p className="search-empty-desc">Try adjusting your search terms or filters</p>
              <button className="search-clear-btn" onClick={() => {setText(''); setMovies([]); setSearched(false);}}>Clear All</button>
            </div>
          )}

          {!loading && movies.length > 0 && (
            <div className="movies-grid">
              {movies.map((movie, index) => (
                <div key={index} className="movie-card-search">
                  <div className="movie-poster">
                    <img 
                      src={movie.poster || movie.image || "https://via.placeholder.com/300x450?text=No+Image"} 
                      alt={movie.title}
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/300x450?text=No+Image";
                      }}
                    />
                    <div className="movie-overlay">
                      <button className="play-btn">
                        <Play size={24} />
                      </button>
                    </div>
                  </div>
                  <div className="movie-details">
                    <h3 className="movie-title">{movie.title}</h3>
                    <p className="movie-description">{movie.description}</p>
                    <div className="movie-meta">
                      <div className="movie-rating">
                        <Star size={16} fill="#ffd700" color="#ffd700" />
                        <span>{movie.rating}</span>
                      </div>
                      <div className="movie-duration">
                        <Clock size={16} />
                        <span>{movie.duration} min</span>
                      </div>
                      <div className="movie-language">
                        <span>{movie.language}</span>
                      </div>
                    </div>
                    <div className="movie-genres">
                      {movie.genres && movie.genres.map((genre, idx) => (
                        <span key={idx} className="genre-tag">{genre}</span>
                      ))}
                    </div>
                    {movie.trailerUrl && (
                      <button 
                        onClick={() => openTrailer(movie.trailerUrl)} 
                        className="trailer-link"
                      >
                        <Play size={16} style={{marginRight: '0.5rem'}} />
                        Watch Trailer
                      </button>
                    )}
                   
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Trailer Modal */}
      {selectedTrailer && (
        <div className="trailer-modal" onClick={closeTrailer}>
          <div className="trailer-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="trailer-close-btn" onClick={closeTrailer}>
              <X size={24} />
            </button>
            <div className="trailer-video-container">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedTrailer}?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1&fs=1`}
                title="Movie Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                onError={(e) => {
                  console.error('Iframe failed to load:', e);
                  // Fallback: open in new tab
                  window.open(`https://www.youtube.com/watch?v=${selectedTrailer}`, '_blank');
                  closeTrailer();
                }}
              ></iframe>
              {/* Fallback link */}
              <div style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                background: 'rgba(0,0,0,0.7)',
                padding: '5px 10px',
                borderRadius: '5px',
                marginBottom : "40px"
              }}>
                <a 
                  href={`https://www.youtube.com/watch?v=${selectedTrailer}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{color: 'white', fontSize: '0.8rem', textDecoration: 'none'}}
                >
                  Open in YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 