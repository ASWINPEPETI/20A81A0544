import {Link} from "react-router-dom";
const Home=()=>{
    return(
        <div>
            <h1>Home</h1>
            <Link to="About" className="btn">
            About
            </Link>
            <a href=""/>
        </div>
    )
}
export default Home;