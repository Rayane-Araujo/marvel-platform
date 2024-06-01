import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Characters } from "../pages/Characters";



const AppRoutes = () => {
    return (
        <Routes>
          <Route path="/" element={<Login />}  /> 
          <Route path="/register" element={<Register />}  /> 
          <Route path="/personagens" element={<Characters />} />
        </Routes>
    );
  };
  
  export default AppRoutes;
