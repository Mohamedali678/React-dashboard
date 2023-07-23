
import Sidenav from "../components/Sidenav"
import { useState } from "react";
function Parent(){


  const [isOpen, setIsOpen] = useState(false);


  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

    return  <div> 
        
        <Sidenav />

      <div className="main" style={{ marginLeft: isOpen == true ? "5%" : "" }}>
        <h1>This is Parent Page</h1>
        <p>This is parent page where all parents information can be found. </p>
        <p>This is parent page where all parents information can be found. </p>
        <p>This is parent page where all parents information can be found. </p>
        <p>This is parent page where all parents information can be found. </p>
        <p>This is parent page where all parents information can be found. </p>
        <p>This is parent page where all parents information can be found. </p>
        <p>This is parent page where all parents information can be found. </p>
        <p>This is parent page where all parents information can be found. </p>
    </div>

    </div>
}


export default Parent;