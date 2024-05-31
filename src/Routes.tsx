import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Header } from "./pages/Header";



const AppRoutes = () => {
    return (
        <Routes>
          <Route path="/" element={<Login />}  /> 
          <Route path="/register" element={<Register />}  /> 
          <Route path="/header" element={<Header />}  /> 
        </Routes>
    );
  };
  
  export default AppRoutes;
