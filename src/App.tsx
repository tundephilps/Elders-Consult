import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "./Pages/Homepage";
import ContactUs from "./Pages/ContactUs";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import FAQ from "./Pages/FAQ";
import Terms from "./Pages/Terms";
import PropertyListing from "./Pages/PropertyListing";
import PropertyDetails from "./Pages/PropertyDetails";
import AboutUs from "./Pages/AboutUs";
import MobileHeader from "./components/MobileHeader";
import Header2 from "./components/Header2";
import Footer2 from "./components/Footer2";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Header2 />
      <MobileHeader />
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/ContactUs" element={<ContactUs />} />

        <Route path="/AboutUs" element={<AboutUs />} />

        <Route path="/FAQ" element={<FAQ />} />

        <Route path="/Terms" element={<Terms />} />

        <Route path="/PropertyListing" element={<PropertyListing />} />

        <Route path="/PropertyDetails/:id" element={<PropertyDetails />} />
      </Routes>
      <Footer2 />
    </Router>
  );
}

export default App;
