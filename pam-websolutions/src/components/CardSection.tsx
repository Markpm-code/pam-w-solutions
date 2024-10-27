import "./CardSection.css";
import Boxing from "../assets/images/bq_respnsive_design.png";
import SEO from "../assets/images/seo-img.png";
import Google from "../assets/images/google-pr.png";
import Domain from "../assets/images/domain.png";

const CardSection = () => {
  return (
    <div className="row justify-content-center mb-4">
      <div className="card ">
        <img className=" " src={SEO} alt="SEO image" />
        <h3>SEO Optimization</h3>
        <p>
          Search Engine Optimization is the process of optimizing a website or
          online content to improve its visibility in search engine results,
          like Google.
        </p>
        <a
          className="card-links card-btn btn"
          href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide#:~:text=SEO%E2%80%94short%20for%20search%20engine,site%20through%20a%20search%20engine."
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </div>
      <div className="card ">
        <img className=" " src={Boxing} alt="responsive image" />
        <h3>Responsive Design</h3>
        <p>
          A responsive design adapts the web-page layout to the different screen
          sizes and approach to web design that aims web pages render well on a
          variety of devices.
        </p>
        <a
          className="card-links card-btn1 btn"
          href="https://www.interaction-design.org/literature/topics/responsive-design?srsltid=AfmBOooNk6NPcDz8Ui1xJ5vLhCT7aPfnGZ7XRqIo40hqHjSaGe40buvW"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </div>
      <div className="card ">
        <img src={Google} alt="google profile image" />
        <h3>Google Business Profile</h3>
        <p>
          A Google Business Profile is an online profile that allows businesses
          and organizations to manage their presence on Google, including Google
          Search and Google Maps.
        </p>
        <a
          className="card-links card-btn btn"
          href="https://www.google.com/intl/en_ie/business/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </div>
      <div className="card ">
        <img src={Domain} alt="domain image" />
        <h3> Custom Domain</h3>
        <p>
          A custom domain is a unique, personalized web address (URL) that is
          typically purchased from a domain registrar and used to represent a
          specific website. Also known as vanity URLs, appear in the address bar
          at the top of every browser.
        </p>
        <a
          className="card-links card-btn1 btn"
          href="https://blog.hubspot.com/website/custom-domains"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default CardSection;
