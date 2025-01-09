import "./Signin.css"
import visible from "./icons8-eye-48.png"
import unvisible from "./icons8-eye-64.png"
import { Link } from "react-router-dom"
import bgi from "../sources/16268230_rm373batch4-15.jpeg"
import data from  "../Dashboard/users/Data.json"
const Signin=()=>
{
    console.log(data)
    function validateFunc(e)
    {
        let indexCount
        let nameVal=e.parentElement.parentElement.parentElement.parentElement.children[2].children[1].value
        let passVal=e.parentElement.parentElement.parentElement.parentElement.children[2].children[2].children[0].value
        let nameArray=[]
        let passArray =[]
        console.log(e.parentElement.parentElement.parentElement.parentElement.children[2].children[2].children[0].value)
        data.map(element=>{
            nameArray.push(element.name)
            passArray.push(element.id)
        })
        if(nameArray.includes(nameVal))
        {
            indexCount=nameArray.indexOf(nameVal)
        }
        if(passArray[indexCount]===passVal)
        {
            console.log("true")
        }
        else{
            alert("نام کاربری یا رمزعبور اشتباه است")
        }
        
    }
    const visUnvis=(clicked)=>
    {
        if(clicked.className==="visible")
        {
            clicked.style.display="none"
            clicked.parentElement.children[0].type="text"
        }
        else
        {
            clicked.parentElement.children[2].style.display="block"
            clicked.parentElement.children[0].type="password"
        }
    }
    return(
        <div className="signinBody">
            <div className="halfblur"></div>
            <img src={bgi} alt="" className="bgi" />
            <div className="signinForm">
                <div className="title">
                    <h4>WELCOME BACK TO</h4>
                    <h2>E-DEZHBAN</h2>
                </div>
                <input type="text" name="" id="" className="signinUserName" placeholder="user name"/>
                <div className="signinPassDiv">
                    <input type="password" name="" id="" className="signinPass" placeholder="password"/>
                    <img src={unvisible} className="unvisible" alt="" onClick={(e)=>{visUnvis(e.target)}}/>
                    <img src={visible} className="visible" alt="" onClick={(e)=>{visUnvis(e.target)}}/>
                </div>
                <div className="signinOption">
                    <div className="savePassword">
                        <input type="checkbox" name="savePassword" id="savePassword" className="signinCheckBox"/>
                        <label for="savePassword" id="savePassword">save password</label>
                    </div>
                    <Link to="/forgetPassword" style={{textDecoration:"none"}}><p className="forgetPassword"> forget password</p></Link>
                </div>
                <span className="background">
            <Link
                to="/Dashbgrep CONFIG_SECCOMP= /boot/config-$(uname -r)
CONFIG_SECCOMP=yoard" className='button button1' onMouseEnter={e=>{validateFunc(e.target)}}>
                <svg>
                    <rect
                        x="0" y="0" 
                        fill="none"
                        width="100%"
                        height="100%"
                    />
                </svg>
                Sign In
            </Link>            
        </span>
        <span className="background">
            <Link
                to="/Signup" className='button'>
                <svg>
                    <rect
                        x="0" y="0" 
                        fill="none"
                        width="100%"
                        height="100%"
                    />
                </svg>
                SIGN UP
            </Link>            
        </span>
            </div>
        </div>
    )
}
export default Signin