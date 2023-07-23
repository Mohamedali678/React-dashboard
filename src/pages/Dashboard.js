import { RiDashboardFill } from "react-icons/ri";
import { FaProductHunt } from "react-icons/fa";
import { AiFillCustomerService } from "react-icons/ai";
import { BsPersonSquare } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { MdWork } from "react-icons/md";
import { ImMenu } from "react-icons/im";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink} from "react-router-dom"
import { useState } from "react";

function Dashboard() {


  const [isOpen, setIsOpen] = useState(false);
  
  
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  
  return <div> 
      
      <div className="sidenav" style={{ width: isOpen === true ? "34px" : "" }} > 
    
    <button
      onClick={handleIsOpen}
      style={{
        marginLeft: isOpen === true ? "1px" : "",
        display: isOpen === false ? "block" : "none",
      }}
    >
      <AiOutlineClose size="30px" color="white" />
    </button>

    <button
      onClick={handleIsOpen}
      style={{
        marginLeft: isOpen === true ? "1px" : "",
        display: isOpen === true ? "block" : "none",
      }}
    >

      <ImMenu color="white" size="30px" />{" "}
    </button>

    <ul>


      <li><NavLink to="/">  <RiDashboardFill /> Dashboard </NavLink>  </li>
      
      <li><NavLink to="/product">   <FaProductHunt /> Product </NavLink></li>
     
     
      <li>
     
        <MdWork /> Services
      </li>

      <li> <NavLink to="/parent">  <BsPersonSquare /> Parent </NavLink> </li>
      
      <li><NavLink to="/attendance"> <SlCalender /> Attendance </NavLink> </li>


      <li>
        <AiFillCustomerService /> Help
      </li>
    </ul>

    </div>

      <div className="main" style={{ marginLeft: isOpen == true ? "5%" : "" }}>
   
        <div className="box-parent">
          <div className="box1">
            
            <h1>Courses</h1>
          </div>
          <div className="box1" style={{backgroundColor: "skyblue"}}>
            <h1>Employees</h1>
          </div>
          <div className="box1" style={{backgroundColor: "orange"}}>
            <h1>Classes</h1>
          </div>
        </div>
        </div>
   
      </div>

}

export default Dashboard;
