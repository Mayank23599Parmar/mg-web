import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Home from "./components/Home.jsx";
import FloatingButton from "./components/FloatingButton.jsx";
import CurrencyPrivacyPolicy from "./components/CurrencyPolicy.jsx";
import DynamicPolicy from "./components/DynamicPolicy.jsx";
import BlogifyPrivacyPolicy from "./components/Blogify.jsx";

createRoot(document.getElementById('root')).render(
  <Router>
  <Header />
  <FloatingButton
    position="right-bottom"
    label={"Install PWA APP"}
    url="https://apps.shopify.com/mg-pwa-mobile-pro"
    offset={0}
  />
  <FloatingButton
    position="right-bottom"
    label={"Install Currency conveter App"}
    url="https://apps.shopify.com/mg-currency-converter-pro"
    offset={56}
  />
  <FloatingButton
    position="right-bottom"
    label={"Install LM ‑ Store Protector"}
    url="https://apps.shopify.com/lm-store-protector"
    offset={112}
  />
  <main>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/mg-currency-conveter-privacy-policy" element={<CurrencyPrivacyPolicy />} />
      <Route path="/lm-dynamic-prices-privacy-policy" element={<DynamicPolicy />} />
      <Route path="/lm-blogify-privacy-policy" element={<BlogifyPrivacyPolicy />} />
      {/* Add other routes here */}
    </Routes>
  </main>
  <Footer />
</Router>,
)
