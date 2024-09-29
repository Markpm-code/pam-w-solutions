import Responsive from "../assets/images/responsive_img.png";
import Profile from "../assets/images/profile_img.png";
import Tablet from "../assets/images/tablet.png";
import Pot from "../assets/images/pot .png";
import Laptop from "../assets/images/laptop.png";
import CardSection from "../components/CardSection";
import "./Home.css";

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

const greetingMessage = greetingUsers();

const Home = () => {
  return (
    <>
    <div className="home container-fluid">
      <div className="text-center ">
        <h1>
          {greetingMessage} <span className="exclamation-mark">!</span>
        </h1>
        <h2 className="">Welcome to Pam Web Solutions</h2>
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
                <button className="contact">Contact me </button>
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
      <div>
        <img className="pot_img" src={Pot} alt="pot image" />
      </div>
      <CardSection />
      {/* <div className="row justify-content-center">
        <div className="card ">
          <img className=" " src={SEO} alt="SEO image" />
          <h3>SEO Optimization</h3>
          <p>
            Search Engine Optimization is the process of optimizing a website
            or online content to improve its visibility in search engine
            results, like Google.
          </p>
          <button className="card-btn">Learn More</button>
        </div>
        <div className="card ">
          <img className=" " src={Boxing} alt="responsive image" />
          <h3>Responsive Design</h3>
          <p>
            A responsive design adapts the web-page layout to the different
            screen sizes and approach to web design that aims web pages render
            well on a variety of devices.
          </p>
          <button className="card-btn1">Learn More</button>
        </div>
        <div className="card ">
          <img src={Google} alt="google profile image" />
          <h3>Google Business Profile</h3>
          <p>
            A Google Business Profile is an online profile that allows
            businesses and organizations to manage their presence on Google,
            including Google Search and Google Maps.
          </p>
          <button className="card-btn">Learn More</button>
        </div>
        <div className="card ">
          <img src={Domain} alt="domain image" />
          <h3> Custom Domain</h3>
          <p>
            A custom domain is a unique, personalized web address (URL) that
            is typically purchased from a domain registrar and used to
            represent a specific website. Also known as vanity URLs, appear in
            the address bar at the top of every browser.
          </p>
          <button className="card-btn1">Learn More</button>
        </div>
      </div> */}
    </div>
  </>
  )
}

export default Home
