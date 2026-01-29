import { List, GeoAltFill, ChevronRight } from 'react-bootstrap-icons';

const HomeHeroSection = () => {
    return (
        <div>

            {/* ================== Hero Section ================== */}
            <section className="hero-section text-center">
                <div className="container">

                    {/* Main Headline - Margin Bottom 4 (1.5rem) */}
                    <h1 className="display-5 fw-bold text-dark mb-4">
                        Find properties near you
                    </h1>

                    {/* "Showing properties in..." Badge - Margin Bottom 4 */}
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-wrap gap-2 text-secondary fs-5">
                        <span className="fw-light">Showing properties in</span>
                        <div className="badge-location rounded-pill px-3 py-1 d-flex align-items-center text-dark">
                            <GeoAltFill className="text-success me-2" />
                            Mumbai
                            <ChevronRight className="ms-2 small text-muted" size={12} />
                        </div>
                    </div>

                    {/* "Not your city?" Floating Button */}
                    {/* Extra margin top to separate from the location badge */}
                    <div className="mt-2">
                        <button className="btn btn-change-city rounded-pill px-4 py-2 d-inline-flex align-items-center">
                            <span className="me-1">Not your city?</span>
                            <span className="text-secondary">Change</span>
                            <ChevronRight className="ms-2 small" size={12} />
                        </button>
                    </div>

                </div>
            </section>
        </div>
  );
};

export default HomeHeroSection;