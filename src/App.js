// --- App.js ---
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePageHeader from './HomePageHeader';
import HomeHeroSection from './HomeHeroSection';
import PropertyList from './PropertyList';
import RecommendationsSection from './RecommendationsSection';

function App() {
  return (
    <div className="App">
      <HomePageHeader />
      <HomeHeroSection />
      <PropertyList />
      <RecommendationsSection />
    </div>
  );
}

export default App;