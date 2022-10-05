import { Routes, Route } from "react-router-dom";
import AboutPage from "../pages/About/About";
import HomePage from "../pages/Home/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

export default Router;
