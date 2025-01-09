import "./signup.css"
import next from "./next.png"
import previos from "./previos.png"
import { Link } from "react-router-dom"
import img from "../sources/16268230_rm373batch4-15.jpeg"
import data from "../Dashboard/users/Data.json"
// import fs from "fs"
import fs from "fs"
import MainData from "../Information/mainData"
const Signup=()=>
{
    console.log(MainData)
    var flag1=0,flag2=0,flag3=0
    var checkId=[];
    function validateId(e)
    {
        let idValue=e.parentElement.parentElement.children[0].children[2].children[1].value
        data.map(element=>{
            checkId.push(element.id)
        })
        console.log(checkId)
        if(checkId.includes(`${idValue}`))
        {
            alert("این کد ملی در حال حاضر احراز شده")
        }
        var mainCheck=[]
        MainData.map(element=>{
            mainCheck.push(element.national)
        })
        if(!mainCheck.includes(e.parentElement.parentElement.children[0].children[2].children[1].value))
        {
            alert("این کد ملی نامعتبر میباشد")
            console.log(mainCheck)
            console.log(id)
        }

    }
    let fName,lName,id,address,fatherName,phoneNumber,post,email,password
    const changeNextForm=(btn)=>
    {
        const calssCheck=btn.parentElement.parentElement
        if(calssCheck.className.includes("form1"))
        {




            calssCheck.style.display="none"
            btn.parentElement.parentElement.parentElement.children[2].style.display="block"
            fName = btn.parentElement.parentElement.children[0].children[0].children[1].value
            lName = btn.parentElement.parentElement.children[0].children[1].children[1].value
            id = btn.parentElement.parentElement.children[0].children[2].children[1].value
            // addForm1ToLS(fName,lName,id)

        }
        if(calssCheck.className.includes("form2"))
        {
            calssCheck.style.display="none"
            btn.parentElement.parentElement.parentElement.children[3].style.display="block"
            btn.parentElement.parentElement.parentElement.children[3].children[1].children[1].style.display="none"
            btn.parentElement.parentElement.parentElement.children[3].children[1].children[2].style.display="block"
            //-----------------------------
            address = btn.parentElement.parentElement.children[0].children[0].children[1].value
            fatherName = btn.parentElement.parentElement.children[0].children[1].children[1].value
            phoneNumber = btn.parentElement.parentElement.children[0].children[2].children[1].value
            // addForm2ToLS(address,fatherName,phoneNumber)

        }
        if(calssCheck.className.includes("form3"))
        {
            // const fs=require("fs")
            // const data = fs.readFileSync('../Dashboard/users/Data.json','utf8');
            // console.log(data)

            if(!checkId.includes(id))
            {
                console.log("first")
                data.push({"id":`${id}`,"name":`${fName+lName}`,"address":`${address}`,"phone":`${phoneNumber}`})
                checkId.push(id)
            }
            // const jsonData = JSON.parse(data1);
            // const newData=data
            // newData.push({"id":`${id}`,"name":`${fName+lName}`,"address":`${address}`,"phone":`${phoneNumber}`})
            // fs.writeFileSync(data,JSON.stringify(newData))




            post = btn.parentElement.parentElement.children[0].children[0].children[1].value
            email = btn.parentElement.parentElement.children[0].children[1].children[1].value
            password = btn.parentElement.parentElement.children[0].children[2].children[1].value
            // addForm3ToLS(post,email,password)
            // console.log(btn.parentElement)
        }
        
    }
    const changeBackForm=(btn)=>
    {
        const calssCheck=btn.parentElement.parentElement
        if(calssCheck.className.includes("form3"))
        {
            calssCheck.style.display="none"
            btn.parentElement.parentElement.parentElement.children[2].style.display="block"

        }
        if(calssCheck.className.includes("form2"))
        {
            calssCheck.style.display="none"
            btn.parentElement.parentElement.parentElement.children[1].style.display="block"
            
        }


    }
    // function addForm1ToLS(name,family,id)
    // {
    //     let lsArray;
    //     if(localStorage.getItem('form1') !== null)
    //     {
    //         lsArray = JSON.parse(localStorage.getItem('form1'))
    //     }
    //     else{
    //         lsArray = [];
    //     }
    //     lsArray.push(name,family,id)
    //     localStorage.setItem('form1',lsArray)
    // }
    // function addForm2ToLS(name,family,id)
    // {
    //     let lsArray;
    //     if(localStorage.getItem('form2') !== null)
    //     {
    //         lsArray = JSON.parse(localStorage.getItem('form2'))
    //     }
    //     else{
    //         lsArray = [];
    //     }
    //     lsArray.push(name,family,id)
    //     localStorage.setItem('form2',lsArray)
    // }
    // function addForm3ToLS(name,family,id)
    // {
    //     let lsArray;
    //     if(localStorage.getItem('form3') !== null)
    //     {
    //         // lsArray = JSON.parse(localStorage.getItem('form3'))
    //     }
    //     else{
    //         lsArray = [];
    //     }
    //     lsArray.push(name,family,id)
    //     localStorage.setItem('form3',lsArray)
    // }
    localStorage.clear()
    return(
        <div className="signupMainBudy">
            <img src={img} alt="" className="subgi"/>
            <div className="signupBody form1">
            <form className="inputBody ">
                <div className="nameBody">
                <label htmlFor="fName">first name</label>
                <input type="text" autoFocus name="firstName" id="fName" />
                </div>
                <div className="familyBody">
                <label htmlFor="lName">last name</label>
                <input type="text" name="lastName" id="lName" />
                </div>
                <div className="numberBody">
                <label htmlFor="id">identity code</label>
                <input type="text" name="" id="id" />
                </div>
            </form>
            <div className="buttonBody">
                <Link to="/Signin" style={{color:"rgba(33, 222, 255, 0.973)",display:"flex",position:"relative",top:"20px"}}><div style={{color:"white"}}>Alreade a Member ? </div> SIGN IN</Link>
                <img src={next} alt="" title="next" onMouseEnter={(e)=>{validateId(e.target)}} className="next" onClick={(e)=>{changeNextForm(e.target)}}/>
            </div>
        </div>
        <div className="signupBody form2">
            <form className="inputBody ">
                <div className="nameBody">
                <label htmlFor="address">address</label>
                <input type="text" autoFocus name="address" id="address" />
                </div>
                <div className="familyBody">
                <label htmlFor="fatherName">father name</label>
                <input type="text" name="fatherName" id="fatherName" />
                </div>
                <div className="numberBody">
                <label htmlFor="phoneNumber">phone number</label>
                <input type="text" name="" id="phoneNumber" pattern="[0-9]{11}"/>
                </div>
            </form>

            <div className="buttonBody">
                <img src={previos} title="previos" alt="" className="previos" onClick={(e)=>{changeBackForm(e.target)}}/>
                <img src={next} alt="" title="next" className="next" onClick={(e)=>{changeNextForm(e.target)}}/>
            </div>
        </div>
        <div className="signupBody form3">
                <form className="inputBody ">
                    <div className="nameBody">
                    <label htmlFor="postCode">postal code</label>
                    <input type="text" autoFocus name="posteCode" id="postCode" />
                    </div>
                    <div className="familyBody">
                    <label htmlFor="email">email</label>
                    <input type="email" name="lastName" id="email" />
                    </div>
                    <div className="numberBody">
                    <label htmlFor="password">password </label>
                    <input type="text" name="" id="password"/>
                    </div>
                </form> 
            <div className="buttonBody">
                <img src={previos} style={{height:"50px"}} title="previos" alt="" className="previos" onClick={(e)=>{changeBackForm(e.target)}}/>
                <img src={next} alt="" title="next" className="next" onClick={(e)=>{changeNextForm(e.target)}}/>
                <Link to="/Dashboard" onMouseEnter={(e)=>{changeNextForm(e.target)}} style={{display:"none"}}><img src={next} alt="" title="next" className="next x"/></Link>
            </div>
        </div>
        </div>
    )
}
export default Signup
