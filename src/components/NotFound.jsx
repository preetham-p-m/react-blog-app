import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link id="home-link" to={'/'}>Back to home page...</Link>
        </div>
     );
}
 
export default NotFound;