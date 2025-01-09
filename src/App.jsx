
import { Route , Routes } from "react-router-dom";
import About from "./Components/About/About";
import Signin from "./Components/Signin/Signin";
import Signup from "./Components/Signup/Signup";
import Dashboard from "./Components/Dashboard/Dashbord";
import Home from "./Components/Home/home";
import Users from "./Components/Dashboard/users/users";
import Information from "./Components/Information/information";


const App=()=>
{
  return(
    <div>
      <div className="appStyleInHome"></div>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Signin" element={<Signin/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Users" element={<Users/>}/>
        <Route path="/Information" element={<Information/>}/>
      </Routes>
    </div>
  )
}
export default App;