// --- RecommendationsSection.jsx ---
import React from 'react';
import { HouseDoor, People, GeoAlt, Telephone } from 'react-bootstrap-icons';

const RecommendationsSection = () => {
  return (
    <section className="recommendations-section text-center">
      
      {/* Decorative Images (Placeholders) */}
      {/* Replace 'src' with your actual House and Pin illustrations */}
      {/* <img 
        src="https://placehold.co/200x200/png?text=House+Illu" 
        alt="House Decoration" 
        className="deco-img deco-house" 
      />
      <img 
        src="https://placehold.co/200x200/png?text=Pin+Illu" 
        alt="Pin Decoration" 
        className="deco-img deco-pin" 
      /> */}

      <div className="container position-relative" style={{ zIndex: 2 }}>
        
        {/* Text Content */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <h2 className="display-6 fw-bold text-dark mb-3">
              Get personalised recommendations
            </h2>
            <p className="fs-5 text-secondary">
              Based on your budget, location & preferences
            </p>

            {/* Action Buttons */}
            <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
              <button className="btn btn-custom-green btn-custom-green-lg rounded-pill text-white fw-bold shadow-sm">
                Continue with Phone
              </button>
              <button className="btn btn-custom-outline rounded-pill shadow-sm">
                Login to personalise
              </button>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="stats-container">
          <div className="row align-items-center">
            
            {/* Stat 1: Properties */}
            <div className="col-6 col-md-3 stat-item">
              <div className="stat-label">
                <HouseDoor className="text-success" /> Properties
              </div>
              <span className="stat-value">153</span>
            </div>

            {/* Stat 2: Partners */}
            <div className="col-6 col-md-3 stat-item">
              <div className="stat-label">
                <People className="text-success" /> Partners
              </div>
              <span className="stat-value">1,475</span>
            </div>

            {/* Stat 3: On-site Visits */}
            <div className="col-6 col-md-3 stat-item">
              <div className="stat-label">
                <GeoAlt className="text-success" /> On-site Visits
              </div>
              <span className="stat-value">331</span>
            </div>

            {/* Stat 4: Enquiries */}
            <div className="col-6 col-md-3 stat-item">
              <div className="stat-label">
                <Telephone className="text-success" /> Enquiries
              </div>
              <span className="stat-value">512</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default RecommendationsSection;