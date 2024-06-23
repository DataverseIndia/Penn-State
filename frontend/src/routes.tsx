import Login from "@/app/auth/login/login";
import Register from "@/app/auth/register/register";
import Verification from "@/app/auth/verify-registration/verify-registration";
import NotFound from "@/app/extra/404";
import ContactUs from "@/app/extra/ContactUs";
import Landing from "@/app/home/Home";
import HomeNews from "@/app/news/news";
import OurResearch from "@/app/research/research";
import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./app/(admin)/home/pages/home";
import Navbar from "./app/home/Navbar";
import Footer from "./app/home/Footer";
import Publications from "./app/(admin)/publications/pages/publications";
import Members from "./app/(admin)/members/pages/members";
import News from "./app/(admin)/news/pages/news";

const AppRoutes: FC = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/admin/register" element={<Register />} />
        <Route path="/research" element={<OurResearch />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/news" element={<HomeNews />} />
        <Route path="/contact-us" element={<ContactUs />} />

        <Route path="/admin/register" element={<Register />} />
        <Route path="/admin/verify-registration" element={<Verification />} />
        <Route path="/admin/login" element={<Login />} />

        <Route path="/admin/home" element={<Home />} />
        <Route path="/admin/publications" element={<Publications />} />
        <Route path="/admin/members" element={<Members />} />
        <Route path="/admin/news" element={<News />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRoutes;
