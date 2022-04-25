import React from "react";
// import styled from "styled-components";
import Navbar from "./components/Nav/Navbar";
import Header from "./components/Header/Header";
import Second from "./components/Second/Second.jsx";
import Third from "./components/Third/Third";
import Fourth from "./components/Fourth/Fourth";
import Fifth from "./components/Fifth/Fifth";
import Cards from "./components/Cards/Cards";
import Form from "./components/Form/Form.jsx";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Cards />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
