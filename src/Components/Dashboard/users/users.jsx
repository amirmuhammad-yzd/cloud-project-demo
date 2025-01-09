import { json, Link } from "react-router-dom"
import img from "../profile.jpg"
import TableUser from "./tables"
import DataArray from "../data"
import { useState } from "react"
import data from "./new-data.json"
import "./users.css"
const Users=()=>
{
  const dataCopy = data
  const [removeList , setRemoveList] = useState(dataCopy)
  const [changeList , setChangeList] = useState(data)
  function deleteFunction(e)
  {
    console.log(e.parentElement.children[1].innerText)
    dataCopy.map((element,index)=>{
      if(element.id === e.parentElement.children[1].innerText)
      {
        setRemoveList(data.splice(index,1))
        
      }
    })
  }
  const [searchList , setSearchList] = useState(dataCopy)
  function searchFunc(e) {
    const searchValue = e.toLowerCase(); 
    const filteredList = data.filter((element) => 
      element.name.toLowerCase().includes(searchValue) || 
      element.family.toLowerCase().includes(searchValue)
    );
  
    setChangeList(filteredList); 
  }
      //  useState={
    //     newArray:[
    //         {nullItem:"",id:"1",name:"sara",national:"078",address:"teh",phone:"051"},
    //         {nullItem:"",id:"2",name:"amir",national:"079",address:"kish",phone:"051"},
    //         {nullItem:"",id:"3",name:"artin",national:"080",address:"babolsar",phone:"051"},
    //         {nullItem:"",id:"4",name:"hossein",national:"203",address:"sabzevar",phone:"051"},
    //         {nullItem:"",id:"5",name:"reza",national:"250",address:"teh",phone:"051"},
    //         {nullItem:"",id:"6",name:"arash",national:"140",address:"mashad",phone:"051"},
    //         {nullItem:"",id:"7",name:"tarlan",national:"123",address:"sabzevar",phone:"051"},
    //         {nullItem:"",id:"8",name:"vahid",national:"123",address:"nishabour",phone:"051"},
        
    //     ]
    //  console.log(dataCopy[index])}
    // // data.assign({"id":3,"name":"romina","address":"Mashhad","phone":"09156547895"})
    // console.log(data)
    function loadData(e)
    {
      // console.log(e.parentElement.children[0])
      if(e.classList[1] === "fa-search")
      {
        e.classList="fas fa-arrow-right"
        e.parentElement.children[0].style.display="block"
      }
      else if(e.classList[1] === "fa-arrow-right")
      {
        e.classList="fas fa-search"
        e.parentElement.children[0].style.display="none"
      }
    }    
  
    const openBtn =(btn)=>
    {
            btn.parentElement.parentElement.classList.toggle("open")
       }
       const searchBtn=(btn)=>
       {
        btn.parentElement.parentElement.parentElement.classList.toggle("open")
       }
    return(
        <div className="Dashboard">
        <div class="sidebar">
      <div class="logo-details">
        {/* <i className="fas fa-lock"></i> */}
        <div class="logo_name">E-DEZHBAN</div>
        <i class="bx bx-menu" id="btn" onClick={(e)=>{openBtn(e.target)}}></i>
      </div>
      <ul class="nav-list">
        <li>
          <i class="bx bx-search" onClick={(e)=>{searchBtn(e.target)}}></i>
          <input type="text" placeholder="Search..." />
          <span class="tooltip">Search</span>
        </li>
        {/* <li>
          <a href="#">
            <i class="bx bx-grid-alt"></i>
            <span class="links_name">Dashboard</span>
          </a>
          <span class="tooltip">Dashboard</span>
        </li> */}
        <li style={{backgroundColor:"#04AA6D",borderRadius:"18px"}}>
          <Link to="/users">
            <i class="bx bx-user"></i>
            <span class="links_name">Users</span>
          </Link>
          <span class="tooltip">User</span>
        </li>
        {/* <li>
          <a href="#">
            <i class="bx bx-chat"></i>
            <span class="links_name">Setting</span>
          </a>
          <span class="tooltip">Setting</span>
        </li> */}
        <li>
        <Link to="/Information">
            <i class="bx bx-pie-chart-alt-2"></i>
            <span class="links_name">Information</span>
          </Link>
          <span class="tooltip">Information</span>
        </li>
        <li>
        <Link to="/Dashboard">
            <i class="bx bx-folder"></i>
            <span class="links_name">Clients</span>
          </Link>
          <span class="tooltip">clients</span>
        </li>
        <li>
          <a href="#">
            <i class="bx bx-cog"></i>
            <span class="links_name">Setting</span>
          </a>
          <span class="tooltip">Setting</span>
        </li>
        <li class="profile">
          <div class="profile-details">
            <img src={img} alt="profileImg" />
            <div class="name_job">
              <div class="name">Admin</div>
              <div class="job">Manager</div>
            </div>
          </div>
          <Link to="/Signin"><i class="bx bx-log-out" id="log_out" title="Exit"></i></Link>
        </li>
      </ul>
    </div>  
      <div class="home-section">
            <div className="tableBody">
                <div className="searchBody">
                  <input type="text" onChange={(e)=>{searchFunc(e.target.value)}} name="searchInput" placeholder="Enter name or ID" id="searchInput" />
                <i className="fas fa-search" onClick={(e)=>{loadData(e.target)}} style={{color:"white"}}></i>
                
                </div>
                <table id="customers">
                        <tr>
                            <th className="code">Code</th>
                            <th className="id">ID</th>
                            <th className="name">Name</th>
                            <th className="phone">Phone</th>
                            <th className="address">Address</th>
                        </tr>
                    {
                        changeList.map((element,index)=>{
                        return(
                              <TableUser code={index+1} id={element.id} name={element.name+" "+element.family} phone={element.phone} address={element.address} deleteItem={(e)=>{deleteFunction(e.target)}} />
                            
                        )
                        })
                    }
                </table>
            </div>

      </div>
        </div>
    )
}
export default Users