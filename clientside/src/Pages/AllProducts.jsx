import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Products from "../Components/Products";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";
import { mobile } from "../responsive";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 10px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const AllProducts = () => {
  const [sort, setSort] = useState("newest");

  return (
    <Container>
      <Navbar />
      <Container style={{ padding: "10px", marginTop: "15%" }}>
        <Title>All Products</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
              <Option value="newest">Newest</Option>
              <Option value="asc">Price (asc)</Option>
              <Option value="desc">Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products sort={sort} />

        <NewsLetter />
      </Container>
      <Footer />
    </Container>
  );
};

export default AllProducts;
