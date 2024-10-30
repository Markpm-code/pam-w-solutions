import { useEffect, useState } from 'react';
import Responsive from "../assets/images/responsive_img.png";
// import Profile from "../assets/images/profile_img.png";
import Swing from "../assets/images/responsive-swing.png";
import Tablet from "../assets/images/tablet.png";
// import Laptop from "../assets/images/laptop.png";
import CardSection from "../components/CardSection";
import "./Home.css";
import { Link } from "react-router-dom";

function greetingUsers() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  let greeting;

  if (hours === 23 && minutes === 59) {
    greeting = "Almost midnight!";
} else if (hours < 12) {
    greeting = "Good morning";
} else if (hours < 18) {
    greeting = "Good afternoon";
} else if (hours < 23) {
    greeting = "Good evening";
} else {
    greeting = "Good night";
}

  return greeting;
}

const Home = () => {
  const [visibleGreeting, setVisibleGreeting] = useState(false);
  const [visibleContent, setVisibleContent] = useState(false);
  const [greetingMessage, setGreetingMessage] = useState("");

  useEffect(() => {
    const message = greetingUsers();
    setGreetingMessage(message);

    // Show the h1 element
    const showGreetingTimeout = setTimeout(() => {
      setVisibleGreeting(true);
    }, 100);

        const showContentTimeout = setTimeout(() => {
          setVisibleContent(true);
        }, 2000);
    

    // Hide the h1 element
    const hideGreetingTimeout = setTimeout(() => {
      setVisibleGreeting(false);
    }, 6000);

    // Cleanup timeouts
    return () => {
      clearTimeout(showContentTimeout);
      clearTimeout(showGreetingTimeout);
      clearTimeout(hideGreetingTimeout);
    };
  }, []);

  return (
    <>
      <div className="home container-fluid text-center">
        <div>
          <div className="mt-2">
            <h1 className={`greeting ${visibleGreeting ? 'visible' : ''}`}>
              {greetingMessage}!
            </h1>
          </div>
          <h1 className={`welcome-content ${visibleContent ? 'visible' : ''}`}>Welcome to Pam Web Solutions</h1>
        </div>
        <div className=" mt-4">
          <div className="row mx-auto justify-content-center mb-4 pb-4">
            <div className="col-xl-6 col-md-10">
              <h1>Website Designs</h1>
              <h2 className='freelance-text'>A Freelance Web Developer</h2>
              <div className='custom-sites'>
                <p>
                  Crafting custom websites that grow your business and engage
                  your audience and establish a strong online presence tailored
                  to your unique needs.
                </p>
                <p className='mt-4'>
                  Transforming ideas into responsive, user-friendly digital
                  experiences.
                </p>
              </div>
              <div className='laptop-image-div col-xl-8 col-md-10 mx-auto'>
                <div className='circle-laptop w-75'>
                  <img className="img-fluid " src={Swing} alt="laptop image" />
                </div>
              </div>
            </div>
            {/* <div className="col">
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
                </a> */}
                {/* <a
                  className="github"
                  href="https://github.com/Markpm-code"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a> */}
              {/* </div>
            </div> */}
            <div className="col-xl-6">
              <h1 className='hire-me'>Hire Me</h1>
              <ul className='list-unstyled hire-list mb-4'>
                <li className='rd'>
                  <i className="fa-solid fa-mobile-screen me-4 my-2"></i>
                  Responsive Design
                </li>
                <li className='seo-opt'>
                  <i className="fa-sharp fa-solid fa-magnifying-glass me-4 my-2"></i>
                  SEO Optimization
                </li>
                <li className='gb'>
                  <i className="fa-solid fa-screwdriver-wrench me-4 my-2"></i>
                  Google business page set-up
                </li>
                <li className='rcd'>
                <i className="fa-solid fa-registered me-4 my-2"></i>
                  Registering Custom Domain in Google
                </li>
              </ul>
              <div>
                <div className="service_qoute ">
                  <p>A service that values your money.</p>
                  <button className="contact">
                    <Link to="/contact" className="text-decoration-none service-qoute-link">
                      Contact me here
                    </Link>
                  </button>
                  <img
                    className="responsive_img img-fluid"
                    src={Responsive}
                    alt="responsive image"
                  />
                </div>
                <img className="tablet_img img-fluid" src={Tablet} alt="tablet image" />
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
