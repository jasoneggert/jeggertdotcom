import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import PersonalProjects from "./components/PersonalProjects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-shell">
      <main className="page">
        <Hero />
        <About />
        <Experience />
        <PersonalProjects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
