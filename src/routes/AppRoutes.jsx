import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Template from '../pages/Template'
import Setting from '../pages/Setting'
import Toturial from '../pages/Toturial'


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Toturial" element={<Toturial />} />
      <Route path="/Setting" element={<Setting />} />
      <Route path="/Template" element={<Template />} />
    </Routes>
  );
}