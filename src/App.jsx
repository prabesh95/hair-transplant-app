import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // New layout component

import Contacts from './pages/Contacts';
import HairLoss from './pages/HairLoss';
import HairTransplant from './pages/HairTransplant';
import PatientGuide from './pages/PatientGuide';
import Results from './pages/Results';
import Service from './pages/Service';
import About from './pages/About';
import ConsultationForm from './components/ConsultationForm';
import NotFound from './pages/NotFound';
import AOS from 'aos';
import 'aos/dist/aos.css';
//dropdowns
import MaleHairTransplant from './pagesDropdowns/serviesDW/MaleHairTransplant';

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, [])
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Main Pages */}
          <Route index element={<HairLoss />} />
          {/* <Route path="contacts" element={<Contacts />} /> */}
          <Route path="hair-loss" element={<HairLoss />} />
          <Route path="hair-transplant" element={<HairTransplant />} />
          <Route path="patient-guide" element={<PatientGuide />} />
          <Route path="results" element={<Results />} />
          <Route path="services" element={<Service />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />

          {/* Nested Routes */}
          <Route path="services">
            <Route path="male-transplant" element={<MaleHairTransplant />} />
            {/* <Route path="anti-hair-loss" element={<AntiHairLoss />} /> */}
          </Route>
          <Route path="hair-transplant">
            <Route path="techniques" element={<MaleHairTransplant />}/>
            {/* <Route path="anti-hair-loss" element={<AntiHairLoss />} /> */}
          </Route>
          {/* <Route path="hair-loss">
            <Route path="anti-hair-loss" element={<RightImageCard />}/> 
          </Route> */}

          {/* <Route path="services">
            <Route path="male-transplant" element={<MaleTransplant />} />
            {/* Add other service sub-routes */}
          {/* </Route> */} 

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
      {/* <div className="fixed inset-0 flex items-center justify-center z-50">
        <ConsultationForm />
      </div>
      <Backdrop/> */}
    </div>
  )
}

export default App