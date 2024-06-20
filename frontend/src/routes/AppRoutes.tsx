import Register from '@/app/auth/register';
import NotFound from '@/app/extra/404';
import ContactUs from '@/app/extra/ContactUs';
import Home from '@/app/home/Home';
import News from '@/app/news/news';
import Publications from '@/app/publications/publications';
import OurResearch from '@/app/research/research';
import { FC } from 'react'
import { Routes, Route } from 'react-router-dom';

const AppRoutes: FC = () => {
  return (
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path='*' element={<NotFound />} />
      <Route path="/admin/register" element={<Register />} />
      <Route path='/research' element={<OurResearch />}/>
      <Route path="/publications" element={<Publications />} />
      <Route path="/news" element={<News />} />
      <Route path="/contact-us" element={<ContactUs />} />
   </Routes>
  )
}

export default AppRoutes
