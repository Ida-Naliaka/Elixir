import React, { useState } from "react";
import styled from "styled-components";
import {
  PersonOutlined,
  CalendarTodayOutlined,
  MonetizationOn,
  CreditCardTwoTone,
  VerifiedUser,
  ShoppingCart,
  Motorcycle,
} from "@material-ui/icons";
import Slider from "../Components/Slider";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import { blogs } from "../data";
import Blog from "../Components/blogcard";

const NavContainer = styled.nav`
  height: 80px;
  top: 0;
  left: 0;
  background: white;
  width: 100%;
  padding-bottom: 20px;
  z-index: 4;
  position: fixed;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  ${mobile({ height: "50px" })}
`;
const NavWrapper = styled.div`
  margin-right: 7%;
  margin-left: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  letter-spacing: 5px;
  font-family: "Satisfy", cursive;
  font-size: 45px;
  ${mobile({ fontSize: "24px", letterSpacing: "0px" })}
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1%",
  })}
`;
const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  width: fit-content;
  margin-left: 25px;
  ${mobile({ marginLeft: "20px" })}
`;
const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20px auto;
  font-family: "Bitter", serif;
  font-size: 20px;
  width: 80%;
  line-height: 52px;
  ${mobile({ fontSize: "15px", marginLeft: "10px", lineHeight: "25px" })}
`;
const InfoWidget = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  ${mobile({ display: "flex", flexDirection: "column", margin: "10px auto" })}
`;
const Section = styled.div`
  display: flex;
  text-align: center;
  padding: 10px;
  width: 40%;
  height: 250px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Bitter", serif;
  font-weight: 300;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 4px;
  ${mobile({ width: "80%", height: "200px" })}
`;
const AboutTitle = styled.h4`
  font-family: "Dancing Script", cursive;
  font-size: 24px;
  ${mobile({ fontSize: "18px" })}
`;
const BlogContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  height: fit-content;
  ${mobile({
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: "20px",
  })}
`;

const LandingPage = () => {
  const [blogItem, setBlogItem] = useState(blogs);

  return (
    <>
      <NavContainer>
        <NavWrapper>
          <Left>
            <Logo>Elixir</Logo>
          </Left>
          <Right>
            <MenuItem>Home</MenuItem>
            <a href="#about" style={{ textDecoration: "none", color: "black" }}>
              <MenuItem>About</MenuItem>
            </a>
            <a
              href="#tutorials"
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem>Blogs</MenuItem>
            </a>
            <Link to="/shop" style={{ textDecoration: "none", color: "black" }}>
              <MenuItem>Shop</MenuItem>
            </Link>
          </Right>
        </NavWrapper>
      </NavContainer>
      <Slider />
      <AboutSection id="about">
        <h1 style={{ fontFamily: "'Satisfy', cursive" }}>About Us</h1>
        There are many variations of passages of Lorem Ipsum available,but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet.
      </AboutSection>
      <InfoWidget>
        <Section>
          <Motorcycle style={{ fontSize: "70px", color: "#E97451" }} />
          <AboutTitle>Shipping and Return</AboutTitle>
          Return unopened and unused merchandise in its original condition
          within 30 days for a full refund
        </Section>
        <Section>
          <CreditCardTwoTone style={{ fontSize: "60px", color: "#E97451" }} />
          <AboutTitle>Safe Payment</AboutTitle>
          Pay with the world's most popular and secure Payment methods
        </Section>
        <Section>
          <ShoppingCart style={{ fontSize: "60px", color: "#E97451" }} />
          <AboutTitle>Shop with Confidence</AboutTitle>
          Our Buyer Protection covers your purchase from click to delivery
        </Section>
        <Section>
          <MonetizationOn style={{ fontSize: "60px", color: "#E97451" }} />
          <AboutTitle>Pocket Friendly</AboutTitle>
          You dont have to break the bank to smell like a million dollars. Our
          scents are pocket friendly.
        </Section>
        <Section>
          <VerifiedUser style={{ fontSize: "60px", color: "#E97451" }} />
          <AboutTitle>Quality Assurance</AboutTitle>
          We Deliver premium, approved, high quality fragrances
        </Section>
      </InfoWidget>
      <div
        id="tutorials"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontFamily: "'Satisfy', cursive" }}>Our Blogs</h1>
        <BlogContainer>
          {blogItem.map((item) => (
            <Blog item={item} key={item._id} />
          ))}
        </BlogContainer>
        <AboutSection>
          {" "}
          Read more Blogs
          <a href="www.google.com">Here</a>
        </AboutSection>
      </div>
      <Footer />
    </>
  );
};
export default LandingPage;
