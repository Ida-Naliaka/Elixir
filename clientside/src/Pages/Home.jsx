import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Categories from "../Components/Categories";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import NewsLetter from "../Components/NewsLetter";
import PopularProducts from "../Components/PopularProducts";
import Slider from "../Components/Slider";
import SearchBar from "../Components/SearchBar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <SearchBar />
      <PopularProducts />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
