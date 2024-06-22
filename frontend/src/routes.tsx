import Login from "@/app/auth/login/login";
import Register from "@/app/auth/register/register";
import Verification from "@/app/auth/verify-registration/verify-registration";
import NotFound from "@/app/extra/404";
import ContactUs from "@/app/extra/ContactUs";
import Home from "@/app/home/Home";
import News from "@/app/news/news";
import OurResearch from "@/app/research/research";
import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./app/(admin)/dashboard";
import Navbar from "./app/home/Navbar";
import Footer from "./app/home/Footer";
import Publications from "./app/(admin)/publications/pages/publications";

const AppRoutes: FC = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/admin/register" element={<Register />} />
        <Route path="/research" element={<OurResearch />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact-us" element={<ContactUs />} />

        <Route path="/admin/register" element={<Register />} />
        <Route path="/admin/verify-registration" element={<Verification />} />
        <Route path="/admin/login" element={<Login />} />

        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/publications" element={<Publications />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRoutes;
