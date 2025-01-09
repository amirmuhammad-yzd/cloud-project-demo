import "./Home.css"
import about from "./about-img.avif"
import signin from "./signin.avif"
import signup from "./signup.avif"
import dashboard from "./dashboard.jpg"
import { Link } from "react-router-dom"
import bgi from "../sources/16268230_rm373batch4-15.jpeg"
const Home=()=>
{
    return(
        <div className="Home">
            <img src={bgi} alt="" className="bgi" />
            <div className="homeContainor">
                <div className="links">
                    <Link to="/Dashboard">
                    <div className="img1">
                    <img src={dashboard} alt="" className="dashboard"/>
                    <p>dashbord</p>
                    </div></Link>
                    <Link to="/Signin"><div className="img2">
                    <img src={signin} alt="" className="signinIn"/>
                    <p>sign in</p>
                    </div>
                    </Link>
                    <Link to="/Signup">
                        <div className="img3">
                    <img src={signup} alt="" className="signUp"/>
                    <p>sign up</p>
                    </div>
                    </Link>
                    <Link to="/About">
                        
                    <div className="img4">
                    <img src={about} alt="" className="aboutOp"/>
                    <p>about us</p>
                        
                    </div>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}
export default Home