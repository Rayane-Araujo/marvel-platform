import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Characters } from "../pages/Characters";
import { Movies } from "../pages/Movies";



const AppRoutes = () => {
    return (
        <Routes>
          <Route path="/" element={<Login />}  /> 
          <Route path="/register" element={<Register />}  /> 
          <Route path="/personagens" element={<Characters />} />
          <Route path="/filmes" element={<Movies />} />
        </Routes>
    );
};
  

export default AppRoutes;
