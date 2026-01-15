import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./app/hero";
import About from "./page/frontpage/about";
import Services from "./page/frontpage/services";
import Contact from "./page/frontpage/contact";
import Footer from "./page/frontpage/footer";


const App: React.FC = () => {
return (
<div className="font-sans text-gray-800">
<Navbar />
<Hero />
<About />
<Services />
<Contact />
<Footer />
</div>
);
};


export default App;