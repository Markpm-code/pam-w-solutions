import { useEffect, useState } from 'react';
import DevelopmentSection from "../components/DevelopmentSection";
import Seo from "../components/SeoSection";
import MobileSection from "../components/MobileSection";
import GoogleSetup from "../components/GoogleSetup";
import UxSection from "../components/UxSection";
import "./Services.css";
import ProcessSection from "../components/ProcessSection";
import { Link } from "react-router-dom";

const Services = () => {
  const [visibleServicesHeading, setVisibleServicesHeading] = useState(false);

  useEffect(() => {
        const showServicesHeadingTimeout = setTimeout(() => {
          setVisibleServicesHeading(true);
        }, 100);

    // Cleanup timeout
    return () => {
      clearTimeout(showServicesHeadingTimeout);
    };
  }, []);

  return (
    <div className="container mb-4 mt-4">
      <h1 className={`text-center services-page ${visibleServicesHeading ? 'visible' : ''}`}>Services</h1>
      <p className="mb-4 main-paragraph">
        At <span>Pam Web Solutions</span>, I provide a range of web development services
        designed to meet your specific business needs, no matter where you are
        in your digital journey. Whether you're starting from scratch or looking
        to enhance an existing website, I'm committed to delivering customized
        solutions that reflect your brand and help your business grow.
      </p>
      <div className="row">
        <div className="col-lg-6 col-md-6 bg-light p-4">
          <DevelopmentSection />
        </div>
        <div className="col-lg-6 col-md-6 seo-section p-4">
          <Seo />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 mobile-section p-4">
          <MobileSection />
        </div>
        <div className="col-lg-6 col-md-6 bg-light p-4 google-border">
          <GoogleSetup />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 bg-light p-4">
          <UxSection />
        </div>
        <div className="col-lg-6 col-md-6 ux-section p-4">
          <ProcessSection />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6  p-4">
          <h2 className="why-pam-heading">Why Work with Pam Web Solutions?</h2>
          <ul className="why-list">
            <li>
              Personalized Service: You'll work directly with me from start to
              finish, ensuring that your vision is at the center of every
              decision.
            </li>
            <li>
              Affordable for Small Businesses: My services are tailored to meet
              the budget of small businesses without compromising quality.
            </li>
            <li>
              Ongoing Support: After launch, I offer ongoing maintenance and
              updates to ensure your website continues to meet your needs.
            </li>
          </ul>
        </div>
        <div className="col p-4 my-auto">
          <p className="get-in-touch">
            <span className="in-touch">Get in Touch!</span> Ready to take your
            business to the next level with a powerful website?
            <Link to="/contact" className="me-1 services-contactPage-link">
              Contact me today in the contact page above or click here for pricing
            </Link>
            to get started!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
