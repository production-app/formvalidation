import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Preloader from "./components/Preloader";
import Form from "./components/Form";
import Footer from "./components/Footer";

function Main() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Banner />
      <About />
      <Form />
      <Footer />
    </>
  );
}

export default Main;
