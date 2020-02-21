import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BlogProvider from "./contexts/blog.provider";
import "./App.css";

function App() {
  return (
    <BlogProvider>
      <div className="App">
        <Navbar />
        <Hero />
      </div>
    </BlogProvider>
  );
}

export default App;
