import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Home from "./components/Home.jsx";
import FloatingButton from "./components/FloatingButton.jsx";

createRoot(document.getElementById('root')).render(
  <Router>
  <Header />
  <FloatingButton/>
  <main>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/contact" element={<ContactForm />} />
      {/* Add other routes here */}
    </Routes>
  </main>
  <Footer />
</Router>,
)
