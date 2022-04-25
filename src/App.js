import React from "react";
// import styled from "styled-components";
import Navbar from "./components/Nav/Navbar";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import Form from "./components/Form/Form.jsx";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Operator from "./components/Operator/Operator";
import Game from "./components/Game/Game";
import Gallery from "./components/Gallery/Gallery";
function App() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <About />
      <Operator />
      <Game />
      <Gallery />
      <Cards />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
