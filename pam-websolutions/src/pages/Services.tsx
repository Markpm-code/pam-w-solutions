import DevelopmentSection from "../components/DevelopmentSection";
import Seo from "../components/SeoSection";
import MobileSection from "../components/MobileSection";
import GoogleSetup from "../components/GoogleSetup";
import UxSection from "../components/UxSection";
import "./Services.css";
import ProcessSection from "../components/ProcessSection";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="container mb-4 mt-4">
      <h1 className="text-center">Services</h1>
      <p className="mb-4">
        At Pam Web Solutions, I provide a range of web development services
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
        <div className="col-lg-6 col-md-6 bg-light p-4">
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
        <div className="col-lg-6 col-md-6 ux-section p-4">
          <h2>Why Work with Pam Web Solutions?</h2>
          <ul>
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
          <p>
            <span className="in-touch">Get in Touch</span> Ready to take your
            business to the next level with a powerful website?
            <Link to="/contact" className="text-decoration-none me-1">
              Contact me today in our contact page
            </Link>
            to get started!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
