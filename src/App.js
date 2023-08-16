import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { FC, Suspense } from "react";
import "./i18n";
import i18n from "./i18n";
import { initReactI18next } from "react-i18next";
import backend from 'i18next-xhr-backend';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';


import Main from "./components/main";
import About from "./components/about";
import Services from "./components/services";
import Contact from "./components/contact";
import Careers from "./components/careers";
import Quote from "./components/quote";

import "./App.css";

library.add(faChevronDown);
library.add(fab);


function App() {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
