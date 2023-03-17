import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";

const RoutesMain = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} exact={true} />
      <Route path="/profile/:id" element={<Profile />} />
    </Routes>
  );
};

export default RoutesMain;
