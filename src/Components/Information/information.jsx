import { Link } from "react-router-dom"
import "../Dashboard/Dashboard.css"
import img from "../Dashboard/profile.jpg"
import DenseTable from "./mainTable"
import "./infoStyle.css"
import Users from "../Dashboard/users/users"
const Information=()=>
{
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
        <i class="fas fa-secure"></i>
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
        <li>
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
          <a href="#">
            <i class="bx bx-pie-chart-alt-2"></i>
            <span class="links_name">Information</span>
          </a>
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
        <div className="userTable">
          <DenseTable/>
        </div>
      </div>

        </div>
    )
}
export default Information