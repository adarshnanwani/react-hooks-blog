import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Post from "./pages/Post";
import BlogProvider from "./contexts/blog.provider";
import "./App.css";

function App() {
  return (
    <BlogProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/posts/:id" component={Post} exact />
          </Switch>
        </BrowserRouter>
      </div>
    </BlogProvider>
  );
}

export default App;
