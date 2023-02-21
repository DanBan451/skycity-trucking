import "./App.css";
import Main from "./components/main";
import About from "./components/about";
import Services from "./components/services";
import Contact from "./components/contact";
import Careers from "./components/careers";
import Quote from "./components/quote";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
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
  );
}

export default App;
