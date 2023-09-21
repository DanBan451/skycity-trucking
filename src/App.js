import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { FC, Suspense, useState } from "react";
import "./i18n";
import i18n from "./i18n";
import { initReactI18next } from "react-i18next";
import backend from "i18next-xhr-backend";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import Main from "./components/main";
import About from "./components/about";
import Services from "./components/services";
import Contact from "./components/contact";
import Careers from "./components/careers";
import Quote from "./components/quote";

import "./App.css";

import QuoteModal from "./components/QuoteModal";
import NavbarComponent from "./components/common/Navbar";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


library.add(faChevronDown);
library.add(fab);

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = (submitted) => {
    if (submitted) {
      toast.success("Quote Submitted!");
    }
    setModalOpen(false);
  };

  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <NavbarComponent handleOpenModal={handleOpenModal} />
        <ToastContainer />
        <QuoteModal isOpen={modalOpen} onClose={handleCloseModal} />
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
