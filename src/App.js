import Header from "./componant/task2/Header";
import Slider from "./componant/task2/Slider";
import Section from "./componant/task2/Section";
import Contact from "./componant/task2/ContactUs";
import Footer from "./componant/task2/Footer";
import About from "./componant/task2/About";
import Product_details from "./componant/task2/Product_details";
import { Routes, Route } from "react-router-dom";

import "./App.css";
// import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <Section />
            </>
          }
        />{" "}
        <Route
          path="about"
          element={
            <>
              <Slider />
              <About />
            </>
          }
        />{" "}
        <Route
          path="Contact_Us"
          element={
            <>
              <Slider />
              <Contact />
            </>
          }
        />{" "}
        <Route path="product/:productId" element={<Product_details />} />{" "}
      </Routes>{" "}
      <Footer />
    </div>
  );
}
export default App;
