import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div>
      <h1 className="text-center mt-4 about-page">About Page</h1>
      <div className="container">
        <p>
          Hi, I'm Marlon, the founder of Pam Web Solutions. My journey into web
          development began with a passion for helping small businesses harness
          the power of the internet. After seeing firsthand how a well-crafted
          website can transform a business, I committed myself to mastering web
          development and digital strategy. Since then, I've been continuously
          learning and refining my skills to ensure I provide the most
          up-to-date and effective solutions for my clients.
        </p>
        <p>
          At Pam Web Solutions, my mission is simple: to empower small
          businesses by providing professional, user-friendly websites tailored
          to your unique needs. I believe in the power of a strong online
          presence and work closely with clients to ensure their websites
          reflect their brand and goals. I'm committed to delivering solutions
          that help your business thrive in the digital landscape.
        </p>
        <div>
          <p>I specialize in :</p>
          <ul>
            <li>
              Web Development (HTML, CSS, JavaScript, Jquery, Bootstrap,
              Node.js, React, Django).
            </li>
            <li>
              Search Engine Optimization (SEO) to ensure your site ranks well in
              search results.
            </li>
            <li>
              Mobile-Responsive Design, ensuring your website looks great and
              functions seamlessly on any device.
            </li>
            <li>
              Google Console & Business Setup, including domain registration and
              business page optimization.
            </li>
            <li>
              User Experience (UX) & User Interface (UI) Design, for websites
              that are both functional and visually appealing.
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
          <Link to="/contact" className="text-decoration-none me-2">
            Contact me today in our contact page
          </Link>
          , and let's make your online journey a success!
        </p>
      </div>
    </div>
  );
};

export default About;
