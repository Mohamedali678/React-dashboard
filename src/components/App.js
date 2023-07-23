import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Product from "../pages/Product";
import Service from "../pages/Service";
import Attendance from "../pages/Attendance"
import Parent from "../pages/Parent"
import Sidenav from "./Sidenav";
function App() {
  return (
   
   <Routes>

      <Route path="/" element={<Dashboard />} />
      
      <Route path="/product" element={<Product />} />
      <Route path="/attendance" element={<Attendance />} />

      <Route path="/parent" element={<Parent /> } />
     
      {/* <Route path="/service" element={<Service />} /> */}
    </Routes>

  );
}

export default App;
