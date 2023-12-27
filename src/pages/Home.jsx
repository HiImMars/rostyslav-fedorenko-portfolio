import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Contacts from "../components/Contacts/Contacts";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </>
  );
};

export default Home;
