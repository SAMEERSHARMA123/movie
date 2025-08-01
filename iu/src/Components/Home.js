import React, { useRef } from "react";
import "./Home.css";
import { Play, MessageSquareDiff, Info, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  // Refs for each row
  const rowRefs = [useRef(), useRef(), useRef()];

  // Scroll handler
  const scrollRow = (idx, dir) => {
    const row = rowRefs[idx].current;
    if (row) {
      const scrollAmount = row.offsetWidth * 0.7;
      row.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <main className="home-main">
      <div className="home-hero">
        <div className="hero-bg">
          <img
            src="https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
            alt="Featured movie"
            className="hero-img"
          />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">The Dark Knight</h1>
            <div className="hero-meta">
              <span className="hero-rating">★ 9.0</span>
              <span className="hero-year">2008</span>
              <span className="hero-genre">Action</span>
              <span className="hero-duration">152 min</span>
            </div>
            <p className="hero-desc">
              When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.
            </p>
            <div className="hero-buttons">
              <button className="hero-play-btn">
                <Play size={20} style={{marginRight: 8}} />
                <span>Play</span>
              </button>
              <button className="hero-list-btn">
                <MessageSquareDiff size={20} style={{marginRight: 8}} />
                <span>My List</span>
              </button>
              <a href="/movie/1" className="hero-info-btn">
                <Info size={20} style={{marginRight: 8}} />
                <span>More Info</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="home-sections">
        <div className="sections-container">
          {/* Row 1 */}
          <div className="movie-section">
            <h2 className="section-title">Popular picks For you</h2>
            <div className="section-movies-wrapper">
              <button className="row-arrow left" onClick={() => scrollRow(0, 'left')}><ChevronLeft size={28} /></button>
              <div className="section-movies" ref={rowRefs[0]}>
                <div className="movie-card">
                  <img src="https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg" alt="Movie" />
                </div>
                <div className="movie-card">
                  <img src="https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" alt="Movie" />
                </div>
                <div className="movie-card">
                  <img src="https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg" alt="Movie" />
                </div>
                <div className="movie-card">
                  <img src="https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg" alt="Movie" />
                </div>
                <div className="movie-card">
                  <img src="https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg" alt="Movie" />
                </div>
                <div className="movie-card">
                  <img src="https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" alt="Movie" />
                </div>
                <div className="movie-card">
                  <img src="https://image.tmdb.org/t/p/w500/6KErczPBROQty7QoIsaa6wJYXZi.jpg" alt="Movie" />
                </div>
                <div className="movie-card">
                  <img src="https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" alt="Movie" />
                </div>
                <div className="movie-card">
                  <img src="https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" alt="Movie" />
                </div>
                <div className="movie-card">
                  <img src="https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg" alt="Movie" />
                </div>
              </div>
              <button className="row-arrow right" onClick={() => scrollRow(0, 'right')}><ChevronRight size={28} /></button>
            </div>
          </div>

          {/* Row 2 */}
          <div className="movie-section">
            <h2 className="section-title">Popular on StreamFlix</h2>
            <div className="section-movies-wrapper">
              <button className="row-arrow left" onClick={() => scrollRow(1, 'left')}><ChevronLeft size={28} /></button>
              <div className="section-movies" ref={rowRefs[1]}>
                <div className="movie-card">
                  <img src="https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg" alt="Movie" />
                </div>
                <div className="movie-card">
                  <img src="https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" alt="Movie" />
                </div>
                <div className="movie-card">
                  <img src="https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg" alt="Movie" />
                </div>
                <div className="movie-card">
                  <img src="https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg" alt="Movie" />
                </div>
                <div className="movie-card">
                  <img src="https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg" alt="Movie" />
                </div>
                <div className="movie-card">
                  <img src="https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" alt="Movie" />
                </div>
                <div className="movie-card">
                  <img src="https://image.tmdb.org/t/p/w500/6KErczPBROQty7QoIsaa6wJYXZi.jpg" alt="Movie" />
                </div>
                <div className="movie-card">
                  <img src="https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" alt="Movie" />
                </div>
                <div className="movie-card">
                  <img src="https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" alt="Movie" />
                </div>
                <div className="movie-card">
                  <img src="https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg" alt="Movie" />
                </div>
              </div>
              <button className="row-arrow right" onClick={() => scrollRow(1, 'right')}><ChevronRight size={28} /></button>
            </div>
          </div>

          {/* Row 3 */}
          <div className="movie-section">
            <h2 className="section-title">New Releases</h2>
            <div className="section-movies-wrapper">
              <button className="row-arrow left" onClick={() => scrollRow(2, 'left')}><ChevronLeft size={28} /></button>
              <div className="section-movies" ref={rowRefs[2]}>
                <div className="movie-card">
                  <img src="https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg" alt="Movie" />
                </div>
                <div className="movie-card">
                  <img src="https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg" alt="Movie" />
                </div>
                <div className="movie-card">
                  <img src="https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg" alt="Movie" />
                </div>
                <div className="movie-card">
                  <img src="https://image.tmdb.org/t/p/w500/5KCVkau1HEl7ZzfPsKAPM0sMiKc.jpg" alt="Movie" />
                </div>
                <div className="movie-card">
                  <img src="https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg" alt="Movie" />
                </div>
                <div className="movie-card">
                  <img src="https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" alt="Movie" />
                </div>
                <div className="movie-card">
                  <img src="https://image.tmdb.org/t/p/w500/6KErczPBROQty7QoIsaa6wJYXZi.jpg" alt="Movie" />
                </div>
                <div className="movie-card">
                  <img src="https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" alt="Movie" />
                </div>
                <div className="movie-card">
                  <img src="https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" alt="Movie" />
                </div>
                <div className="movie-card">
                  <img src="https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg" alt="Movie" />
                </div>
              </div>
              <button className="row-arrow right" onClick={() => scrollRow(2, 'right')}><ChevronRight size={28} /></button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 