import React, { useState, useRef, useEffect } from 'react';
import { MapPin, ChevronDown, Search } from 'lucide-react';
import { locationsList } from '../data/courses.js';

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
    <div className="w-full max-w-2xl relative">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white border border-gray-300 rounded-xl p-1.5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] focus-within:border-gray-500 focus-within:ring-2 focus-within:ring-gray-200 transition-all gap-2 sm:gap-0"
      >
        {/* Location Selector */}
        <div className="relative shrink-0" ref={locationRef}>
          <button
            type="button"
            onClick={() => setLocationOpen(!locationOpen)}
            className="flex items-center gap-2.5 px-3.5 py-2.5 sm:py-2 text-sm text-gray-700 hover:text-black transition-colors rounded-lg hover:bg-gray-50/80 cursor-pointer w-full sm:w-auto justify-between sm:justify-start"
            aria-expanded={locationOpen}
            aria-label="Filter by location"
          >
            <MapPin className="w-4 h-4 text-gray-500 shrink-0" />
            <span className="truncate max-w-[120px] sm:max-w-[140px] text-[14px] font-normal text-gray-600">
              {selectedLocation}
            </span>
            <ChevronDown className={`w-3.5 h-3.5 text-gray-400 shrink-0 transition-transform ${locationOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Location Dropdown */}
          {locationOpen && (
            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 z-50 animate-in fade-in duration-150">
              <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Choose Location
              </div>
              <button
                type="button"
                onClick={() => handleSelectLocation('Enter Location')}
                className="w-full text-left px-3.5 py-2 text-sm hover:bg-gray-50 text-gray-500 hover:text-gray-900"
              >
                All Locations / Any
              </button>
              {locationsList.map((loc) => (
                <button
                  key={loc}
                  type="button"
                  onClick={() => handleSelectLocation(loc)}
                  className={`w-full text-left px-3.5 py-2 text-sm hover:bg-gray-50 flex items-center justify-between ${
                    selectedLocation === loc ? 'font-semibold text-[#0096c7] bg-cyan-50/40' : 'text-gray-700'
                  }`}
                >
                  <span>{loc}</span>
                  {selectedLocation === loc && <span className="w-1.5 h-1.5 rounded-full bg-[#0096c7]"></span>}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="hidden sm:block h-7 w-[1px] bg-gray-200 mx-1 shrink-0" />

        {/* Subject or Skill Input */}
        <div className="flex-1 min-w-0 px-2 sm:px-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a Subjects, or Skills"
            className="w-full bg-transparent border-0 focus:outline-none text-[14px] sm:text-[15px] text-gray-900 placeholder-gray-400 py-2 sm:py-0"
          />
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="bg-black hover:bg-gray-800 active:scale-95 text-white font-medium text-sm px-6 py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm shrink-0"
        >
          <Search className="w-4 h-4 text-white" />
          <span>Search</span>
        </button>
      </form>
    </div>
  );
}
