import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Categories from "../Components/Categories";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import NewsLetter from "../Components/NewsLetter";
import PopularProducts from "../Components/PopularProducts";
import Slider from "../Components/Slider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Search } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import axios from "axios";

const SearchContainer = styled.div`
  display: flex;
  width: 50%;
  height: fit-content;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-left: 25%;
  margin-top: 10px;
  ${mobile({ border: "none" })}
`;
const Title = styled.h2`
  font-size: 23px;
  ${mobile({ display: "none" })}
`;
const SearchResult = styled.div`
  cursor: pointer;
  background-color: #e8e8e8;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: black;
`;
const SearchParent = styled.span`
  margin: 5px;
  width: 100%;
  height: fit-content;
  border-radius: 20px;
  display: flex;
  padding: 5px;
  background-color: #e8e8e8;
`;
const Input = styled.input`
  border: 1px solid lightgray;
  height: 30px;
  padding: 2px;
  font-size: 15px;
  ${mobile({ width: "80vw" })}
`;

const Home = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const user = useSelector((state) => state.user.currentUser);

  const handleSearch = async () => {
    if (!search) {
      toast.warning("Enter Search Item");
    }

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const res = await axios.get(
        `/api/products/newOrder?search=${search}`,
        config
      );
      res.data.length > 0
        ? setSearchResult(res.data)
        : toast.warning("No results found");
    } catch (error) {
      toast.error("Failed to Load the Search Results");
    }
  };
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <SearchContainer>
        <Title>Search Products</Title>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "black",
          }}
        >
          <Input
            placeholder="Search item"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search
            onClick={handleSearch}
            style={{
              color: "black",
              fontSize: 18,
              marginTop: "10px",
              cursor: "pointer",
            }}
          />
        </div>
        {search.length && searchResult.length > 0 ? (
          <>
            <div>
              <b>Search Results</b>
            </div>
            {searchResult.map((p) => (
              <div key={p._id}>
                <SearchParent onClick={() => navigate(`/products/${p._id}`)}>
                  <Avatar
                    alt={p.title}
                    src={p.img}
                    style={{ marginTop: "5px" }}
                  />
                  <SearchResult>
                    <p style={{ fontSize: "18px" }}>{p.title}</p>
                  </SearchResult>
                </SearchParent>
              </div>
            ))}
          </>
        ) : (
          ""
        )}
      </SearchContainer>
      <PopularProducts />
      <NewsLetter />
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Home;
