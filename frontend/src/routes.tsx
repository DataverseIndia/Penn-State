import Login from "@/app/auth/login/login";
import Register from "@/app/auth/register/register";
import Verification from "@/app/auth/verify-registration/verify-registration";
import NotFound from "@/app/extra/404";
import ContactUs from "@/app/extra/contact-us";
import Landing from "@/app/(landing)/home/Home";
import Publications from "./app/(landing)/publications";
import News from "@/app/(landing)/news";
import OurResearch from "@/app/(landing)/research";
import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./app/(admin)/home/pages/home";
import Navbar from "./app/(landing)/home/Navbar";
import Footer from "./app/(landing)/home/Footer";
import AdminPublications from "./app/(admin)/publications/pages/publications";
import AdminMembers from "./app/(admin)/members/pages/members";
import AdminNews from "./app/(admin)/news/pages/news";

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
        <Route path="/news" element={<News />} />
        <Route path="/contact-us" element={<ContactUs />} />

        <Route path="/admin/register" element={<Register />} />
        <Route path="/admin/verify-registration" element={<Verification />} />
        <Route path="/admin/login" element={<Login />} />

        <Route path="/admin/home" element={<Home />} />
        <Route path="/admin/publications" element={<AdminPublications />} />
        <Route path="/admin/members" element={<AdminMembers />} />
        <Route path="/admin/news" element={<AdminNews />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRoutes;
