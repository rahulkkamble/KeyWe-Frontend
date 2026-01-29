// --- PropertyList.jsx ---
import React from 'react';
import { Heart, PatchCheckFill, LightningChargeFill } from 'react-bootstrap-icons';

// Mock Data mimicking the image content
const properties = [
    {
        id: 1,
        name: "GreenView Residences",
        location: "Whitefield",
        price: "₹ 85 L",
        tag: "Trending",
        tagType: "trending", // used for CSS class
        verified: true, // New Field
        image: "https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799723.jpg?t=st=1769680408~exp=1769684008~hmac=b7489d01c7b60d81e61b5eddbe268ede25f8075047c1965ca54145e1407eacd7", // Replace with real image
    },
    {
        id: 2,
        name: "Prestige Lakeside ...",
        location: "Varthur",
        price: "₹ 1.2 Cr",
        tag: null, // No tag for this one
        verified: true, // New Field
        image: "https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799663.jpg?t=st=1769680553~exp=1769684153~hmac=ae25bf1315047ababfb574dbedbb4e639f956bd90e66269b55a0ce5290cc80ae",
    },
    {
        id: 3,
        name: "Skylight Tower",
        location: "HSR Layout",
        price: "₹ 65,000",
        tag: "High Demand",
        tagType: "demand",
        verified: true, // New Field
        image: "https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799673.jpg?t=st=1769680592~exp=1769684192~hmac=00e0bbf6af89509b95f803dcc1fde574eb60cd91aa9e7fab7b63270498ba7b0a",
    },
    {
        id: 4,
        name: "Sobha Dream Acres",
        location: "Balagere",
        price: "₹ 75 L",
        tag: "New Launch",
        tagType: "launch",
        verified: true, // New Field
        image: "https://img.freepik.com/free-photo/vertical-shot-white-building-clear-sky_181624-4575.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
        id: 5,
        name: "Orchid Aura",
        location: "Hubarhalli",
        price: "₹ 1.8 Cr",
        tag: "Trending",
        tagType: "trending",
        verified: true, // New Field
        image: "https://placehold.co/600x400/e0e0e0/909090?text=Orchid",
    },
    {
        id: 6,
        name: "Prestige Elysian",
        location: "Bannerghatta",
        price: "₹ 92 L",
        tag: "High Demand",
        tagType: "demand",
        verified: true, // New Field
        image: "https://placehold.co/600x400/e0e0e0/909090?text=Prestige",
    },
    {
        id: 7,
        name: "Parkside Meadows",
        location: "Jakkur",
        price: "₹ 92 L",
        tag: "Trending",
        tagType: "trending",
        verified: true, // New Field
        image: "https://placehold.co/600x400/e0e0e0/909090?text=Parkside",
    },
    {
        id: 8,
        name: "BVR Blossoms",
        location: "Sarjapur Road",
        price: "₹ 1.8 Cr",
        tag: "High Demand",
        tagType: "demand",
        verified: true, // New Field
        image: "https://placehold.co/600x400/e0e0e0/909090?text=BVR",
    },
];

const PropertyList = () => {
    return (
        <section className="py-5 bg-light">
            <div className="container">

                {/* Section Header */}
                <div className="mb-4">
                    <h2 className="fw-bold text-dark">
                        Trending Properties in <span className="text-dark">Mumbai</span>
                    </h2>
                </div>

                {/* Grid System */}
                <div className="row g-4">
                    {properties.map((property) => (
                        <div key={property.id} className="col-12 col-sm-6 col-lg-3">

                            {/* Card Component */}
                            <div className="card property-card shadow-sm h-100">

                                {/* Image Wrapper */}
                                <div className="card-img-wrapper">
                                    {/* Badge (Conditional Rendering) */}
                                    {property.tag && (
                                        <span className={`badge-overlay badge-${property.tagType}`}>
                                            {property.tag}
                                        </span>
                                    )}

                                    {/* 2. NEW: Verified Badge (Bottom Left of Image) */}
                                    {property.verified && (
                                        <span className="badge-verified">
                                            <PatchCheckFill className="me-1 text-primary" size={14} />
                                            KeyWe Verified
                                        </span>
                                    )}

                                    {/* Heart Icon */}
                                    <button className="btn-favorite text-secondary">
                                        <Heart size={16} />
                                    </button>

                                    {/* Image */}
                                    <img
                                        src={property.image}
                                        alt={property.name}
                                        className="card-img-top"
                                    />
                                </div>

                                {/* Card Body */}
                                {/* <div className="card-body">
                  <h5 className="card-title text-truncate">{property.name}</h5>
                  <p className="card-location mb-2">{property.location}</p>
                  
                  <div className="d-flex align-items-center mt-3">
                    <span className="text-muted me-1 small">From</span>
                    <span className="card-price">{property.price}</span>
                  </div>
                </div> */}
                                {/* new Card Body */}
                                {/* Card Body */}
                                <div className="card-body d-flex flex-column">
                                    {/* {property.verified && (
                                        <span className="badge-verified-2">
                                            <PatchCheckFill className="me-1 text-primary" size={14} />
                                            KeyWe Verified
                                        </span>
                                    )} */}
                                    <h5 className="card-title text-truncate">{property.name}</h5>
                                    <p className="card-location mb-auto">{property.location}</p>

                                    {/* 3. NEW: Price & Book Action Wrapper */}
                                    <div className="d-flex justify-content-between align-items-end mt-3 border-top pt-3">
                                        <div>
                                            <span className="text-muted small d-block" style={{ lineHeight: '1' }}>From</span>
                                            <span className="card-price">{property.price}</span>
                                        </div>

                                        {/* The Action Button */}
                                        <button className="btn btn-sm btn-book-visit">
                                            <LightningChargeFill size={14} className="me-1" /> Book
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center view-all-container">
                    <button className="btn btn-custom-green rounded-pill px-5 py-2 text-white fw-bold shadow-sm">
                        View All
                    </button>
                </div>

            </div>
        </section>
    );
};

export default PropertyList;