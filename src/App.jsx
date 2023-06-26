import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search";
import Hero from "./components/Hero/Hero";
import Table from "./components/Table";
import Review from "./components/Reviews/Review";


const App = () => {
  return (
    <div>
      <Navbar />
      <Search/>
      <Hero/>
      <Table/>
      <Review/>
    </div>
  );
};

export default App;
