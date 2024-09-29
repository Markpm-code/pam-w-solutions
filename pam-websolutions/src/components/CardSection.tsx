import "./CardSection.css";
import Boxing from "../assets/images/bq_respnsive_design.png";
import SEO from "../assets/images/seo-img.png";
import Google from "../assets/images/google-pr.png";
import Domain from "../assets/images/domain.png";

const CardSection = () => {
  return (
    <div className="row justify-content-center">
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
    </div>
  )
}

export default CardSection
