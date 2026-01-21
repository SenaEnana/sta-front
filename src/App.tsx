import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./page/frontpage/hero";
import About from "./page/frontpage/about";
import Services from "./page/frontpage/services";
import Contact from "./page/frontpage/contact";
import Footer from "./page/frontpage/footer";
import SignUp from "./page/auth/signup/signup";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Services />
            <Contact />
          </>
        } />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
