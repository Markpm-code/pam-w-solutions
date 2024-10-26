import { useEffect, useState } from 'react';
import ContactForm from "../components/ContactForm";
import Background from "../assets/video/background.mp4";
import "./Contact.css";

const Contact = () => {
  const [visibleContactHeading, setVisibleContactHeading] = useState(false);

  useEffect(() => {
        const showContactHeadingTimeout = setTimeout(() => {
          setVisibleContactHeading(true);
        }, 100);

    // Cleanup timeout
    return () => {
      clearTimeout(showContactHeadingTimeout);
    };
  }, []);
  return (
    <div className="container-fluid mt-4">
      <h1 className={`text-center contact-me ${visibleContactHeading ? 'visible' : ''}`}>Contact Page</h1>
      <div className="container">
        <p>
          Ready to take your online presence to the next level? I'd love to hear
          from you! Whether you're looking to build a brand-new website, improve
          your current one, or explore how Pam Web Solutions can help your
          business grow, I'm here to assist you every step of the way.
        </p>
        <p>Let's get in touch:</p>
        <ul className="list-unstyled">
          <li>
            <i className="fa-solid fa-envelope me-3"></i>Email:
          </li>
          <li>
            <i className="fa-solid fa-phone me-3 mt-2"></i>Phone:
          </li>
          <li>
            <i className="fa-solid fa-location-dot me-3 mt-2"></i>
            Location: Galway, Ireland, offering services remotely worldwide.
          </li>
        </ul>
        <p>
          Or simply fill out the form below, and I'll get back to you as soon as
          possible!
        </p>
        <h2 className="text-center contact-form">Contact Form</h2>
        <div className="video-background rounded mt-4">
          <video autoPlay muted loop id="bg-video">
            <source src={Background} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="mx-auto col-md-6 content">
            <ContactForm />
          </div>
        </div>
        <div className="mt-4">
          <h3>Let's work together:</h3>
          <p>
            I'm passionate about helping businesses like yours create a powerful
            online presence. Feel free to reach out with any questions, project
            inquiries, or even if you'd like to chat about your vision. I look
            forward to connecting with you and exploring how we can make your
            website a success!
          </p>
        </div>
        <div className="mb-4">
          <h4>Follow Me:</h4>
          <a
            href="https://www.linkedin.com/in/marlon-mandaya-544172234/"
            target="_blank"
            rel="noopener noreferrer" className="text-decoration-none"
          >
            <i className="fab fa-linkedin linkedin-icon mx-2"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61562777530514"
            target="_blank"
            rel="noopener noreferrer" className="text-decoration-none mx-2"
          >
            <i className="fab fa-facebook facebook-icon mx-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
