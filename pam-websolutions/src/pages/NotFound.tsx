import { Link } from "react-router-dom"
import "./NotFound.css"

const NotFound = () => {
  return (
    <div className="notFound-container container">
      <h2>Page not found!</h2>
      <p>The page you are looking for is not available on this site.</p>

      <p>Please go back to the <Link className="back-to-homepage btn btn-outline-dark me-2" to="/">homepage</Link>.</p>
    </div>
  )
}

export default NotFound
