import React from "react";
import Header from "./Header.js";
import About from "./About.js";
import blogData from "../data/blog";

console.log(blogData);

function App() {
     
  return (
    
    <div className="App">
      <Header/>
      <About image={blogData.image} about={blogData.about}/>
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

export default App;
