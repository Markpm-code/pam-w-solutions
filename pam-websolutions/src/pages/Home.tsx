import { useEffect, useState } from 'react';
import Responsive from "../assets/images/responsive_img.png";
import Profile from "../assets/images/profile_img.png";
import Tablet from "../assets/images/tablet.png";
import Pot from "../assets/images/pot .png";
import Laptop from "../assets/images/laptop.png";
import CardSection from "../components/CardSection";
import "./Home.css";
import { Link } from "react-router-dom";

function greetingUsers() {
  const now = new Date();
  const hours = now.getHours();

  let greeting;

  if (hours < 12) {
    greeting = "Good morning";
  } else if (hours < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return greeting;
}

// const greetingMessage = greetingUsers();

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [greetingMessage, setGreetingMessage] = useState("");

  useEffect(() => {
    const message = greetingUsers();
    setGreetingMessage(message);

    // Show the h1 element
    const showTimeout = setTimeout(() => {
      setVisible(true);
    }, 100);

    // Hide the h1 element
    const hideTimeout = setTimeout(() => {
      setVisible(false);
    }, 5000);

    // Cleanup timeouts on component unmount
    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <>
      <div className="home container-fluid">
        <div className="text-center ">
          <div className="mt-2">
            <h1 className={`greeting ${visible ? 'visible' : ''}`}>
              {greetingMessage}!
            </h1>
          </div>
          <h1 className="welcome-text">Welcome to Pam Web Solutions</h1>
        </div>
        <div className="container mt-4">
          <div className="row justify content-center">
            <div className="col">
              <h1>Website Designs</h1>
              <h2>A Freelance Web Developer</h2>
              <div>
                <p>
                  Crafting custom websites that grow your business and engage
                  your audience and establish a strong online presence tailored
                  to your unique needs.
                </p>
                <p>
                  Transforming ideas into responsive, user-friendly digital
                  experiences.
                </p>
              </div>
              <div>
                <img className=" " src={Laptop} alt="laptop image" />
              </div>
            </div>
            <div className="col">
              <img className="profile " src={Profile} alt="profile image" />
              <div className="row justify-content-center mt-4">
                <a
                  className="linkedin"
                  href="https://www.linkedin.com/in/marlon-mandaya-544172234/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
                <a className="portfolio" href="">
                  Portfolio
                </a>
                {/* <a
                  className="github"
                  href="https://github.com/Markpm-code"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a> */}
              </div>
            </div>
            <div className="col">
              <h1>Hire Me</h1>
              <ul>
                <li>Responsive Design</li>
                <li>SEO Optimization</li>
                <li>Google business page set-up</li>
                <li>Registering Custom Domain in Google</li>
              </ul>
              <div>
                <div className="service_qoute ">
                  <p>A service that values your money.</p>
                  <button className="contact">
                    <Link to="/contact" className="text-decoration-none">
                      Contact me here
                    </Link>
                  </button>
                  <img
                    className="responsive_img"
                    src={Responsive}
                    alt="responsive image"
                  />
                </div>
                <img className="tablet_img" src={Tablet} alt="tablet image" />
              </div>
            </div>
          </div>
        </div>
        <CardSection />
      </div>
    </>
  );
};

export default Home;
