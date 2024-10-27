import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  const [visibleAboutHeading, setVisibleAboutHeading] = useState(false);

  useEffect(() => {
        const showAboutContentTimeout = setTimeout(() => {
          setVisibleAboutHeading(true);
        }, 100);

    // Cleanup timeout
    return () => {
      clearTimeout(showAboutContentTimeout);
    };
  }, []);

  return (
    <div className='mb-4'>
      <h1 className={`text-center mt-4 about-page ${visibleAboutHeading ? 'visible' : ''}`}>About Page</h1>
      <div className="container about-p">
        <p>
          Hi, <span className='creator'>I'm Marlon</span>, the founder of Pam Web Solutions. My journey into web
          development began with a passion for helping small businesses harness
          the power of the internet. After seeing firsthand how a well-crafted
          website can transform a business, I committed myself to mastering web
          development and digital strategy. Since then, I've been continuously
          learning and refining my skills to ensure I provide the most
          up-to-date and effective solutions for my clients.
        </p>
        <p>
          At <span className='about-pws'>Pam Web Solutions</span>, my mission is simple: to empower small
          businesses by providing professional, user-friendly websites tailored
          to your unique needs. I believe in the power of a strong online
          presence and work closely with clients to ensure their websites
          reflect their brand and goals. I'm committed to delivering solutions
          that help your business thrive in the digital landscape.
        </p>
          <div className='col-lg-8 mx-auto'>
            <p className="specialize-p text-center">I specialize in :</p>
            <ul className="list-unstyled">
              <li className="seo">
                <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
                <strong> Search Engine Optimization</strong> (SEO) <br />
                To ensure your site ranks well in search results
              </li>
              <li className="user-experience">
                <i className="fa-solid fa-palette"></i>
                <strong>
                User Experience (UX) & User Interface (UI) Design
                </strong>
                <br /> For websites that are both functional and visually
                appealing
              </li>
              <li className="gcbs">
                <i className="fa-solid fa-screwdriver-wrench"></i>
                <strong> Google Console & Business Setup</strong> <br />
                Including domain registration and business page optimization.
              </li>
              <li className="web-development">
              <i className="fa-solid fa-globe"></i>
                <strong> Web Development</strong> <br />
                HTML, CSS, JavaScript, Jquery, Bootstrap, Node.js, React, Django
                and more
              </li>
              <li className="mrd">
                <i className="fa-solid fa-mobile-screen"></i>
                <strong> Mobile-Responsive Design</strong>
                <br /> Ensuring your website looks great and functions seamlessly
                on any device
              </li>
            </ul>
          </div>
        <p>
          Whether you're just starting out or looking to upgrade your online
          presence, I'm here to build your digital platform from the ground up.
          Each project I take on is a collaboration, where I tailor my approach
          to meet your specific business goals.
        </p>
        <p>
          Let's work together to create a website that represents your brand and
          drives your business forward. Ready to get started?
          <Link to="/contact" className="me-2 contactFor-pricing">
            Contact me today in the contact page above or click here for pricing
          </Link>
          , and let's make your online journey a success!
        </p>
      </div>
    </div>
  );
};

export default About;
