import React, { useState, useRef, useEffect } from 'react';
import { locationsList } from '../data/courses.js';
import './SearchBar.css';

export default function SearchBar({ onSearch, activeLocation, activeQuery }) {
  const [selectedLocation, setSelectedLocation] = useState(activeLocation || 'Enter Location');
  const [query, setQuery] = useState(activeQuery || '');
  const [locationOpen, setLocationOpen] = useState(false);
  const locationRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (locationRef.current && !locationRef.current.contains(e.target)) {
        setLocationOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectLocation = (loc) => {
    setSelectedLocation(loc);
    setLocationOpen(false);
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    onSearch({
      query: query.trim(),
      location: selectedLocation === 'Enter Location' ? '' : selectedLocation
    });
  };

  return (
    <div className="searchbar-container">
      <form onSubmit={handleSubmit} className="searchbar-box">
        
        {/* Location Dropdown */}
        <div className="search-location-wrapper" ref={locationRef}>
          <button
            type="button"
            onClick={() => setLocationOpen(!locationOpen)}
            className="search-location-btn"
            aria-expanded={locationOpen}
          >
            <svg className="search-location-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="search-location-text">{selectedLocation}</span>
            <svg className={`search-location-arrow ${locationOpen ? 'open' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {locationOpen && (
            <div className="search-location-menu">
              <button
                type="button"
                onClick={() => handleSelectLocation('Enter Location')}
                className="search-location-option"
              >
                All Locations
              </button>
              {locationsList.map((loc) => (
                <button
                  key={loc}
                  type="button"
                  onClick={() => handleSelectLocation(loc)}
                  className={`search-location-option ${selectedLocation === loc ? 'active' : ''}`}
                >
                  <span>{loc}</span>
                  {selectedLocation === loc && <span>✓</span>}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Vertical divider */}
        <div className="search-divider" />

        {/* Search input */}
        <div className="search-input-wrapper">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a Subjects, or Skills"
            className="search-input"
          />
        </div>

        {/* Submit Search Button */}
        <button type="submit" className="search-submit-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span>Search</span>
        </button>

      </form>
    </div>
  );
}
