import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Projectss from "./components/Projectss";
import Home from "./components/Home";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="pt-10 text-white font-serif">
        <Routes>
          <Route path="my-portfolioo/" element={<Home />} />  
          <Route path="my-portfolioo/Projectss" element={<Projectss />} />
          <Route path="my-portfolioo/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
