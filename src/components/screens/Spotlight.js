import React from "react";
import styled from "styled-components";
import Logo from "../assets/images/logo.png";
import Banner from "../assets/images/banner.jpg";

export default function Spotlight() {
  return (
    <>
      <Spotlights>
        <Wrapper>
          <Header>
            <HeaderLeft>
              <HeaderImage src={Logo} alt="Logo" />
            </HeaderLeft>
            <HeaderRight>
              <HeaderNav>
                <HeaderList>
                  <HeaderLink>ABOUT</HeaderLink>
                </HeaderList>
                <HeaderList>
                  <HeaderLink>CONTACT US</HeaderLink>
                </HeaderList>
                <SignIn>SIGN IN</SignIn>
              </HeaderNav>
            </HeaderRight>
          </Header>
          <Main>
            <MainContent>
              <MainHeading>
                Welcome to Hotel Felicity <br /> Landing Page 2019
              </MainHeading>
              <MainPara>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable
              </MainPara>
              <Mainbutton>Read More</Mainbutton>
            </MainContent>
            <Date>
              <DateBooking>
                <Arrival>ARRIVAL DATE</Arrival>
                <DateForm>
                  <DateInput type="date"></DateInput>
                </DateForm>
              </DateBooking>
              <DateBooking>
                <Arrival>DEPARTURE DATE</Arrival>
                <DateForm>
                  <DateInput type="date"></DateInput>
                </DateForm>
              </DateBooking>
              <DateBooking>
                <Arrival>PERSON</Arrival>
                <DateForm>
                  <DateInput type="number"></DateInput>
                  <Button>Book Now</Button>
                </DateForm>
              </DateBooking>
            </Date>
          </Main>
        </Wrapper>
      </Spotlights>
    </>
  );
}

const Spotlights = styled.section`
  background: url(${Banner}) no-repeat;
  background-size: cover;
`;

const Wrapper = styled.div`
  width:90%;
  margin: 0 auto;
  @media all and (max-width:1080px){
    width:85%;
    margin: 0 auto;
  }
  @media all and (max-width:980px){
    width: 86%;
  }
`;
const Header = styled.header`
  padding: 21px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderLeft = styled.div`
  width: 15%;
`;
const HeaderImage = styled.img`
  width: 100%;
  display: block;
`;
const HeaderRight = styled.div``;
const HeaderNav = styled.ul`
  display: flex;
  align-items: center;
  @media all and (max-width:980px){
    display: none;
  }
`;
const HeaderList = styled.li`
  margin-left: 20px;
  color: #ffffff; 
  cursor: pointer;
  transition: 0.4s ease-in-out;
  &:hover{
    color: #000;
    transition: 0.4s ease-in-out;
  }
`;
const HeaderLink = styled.a``;
const SignIn = styled.a`
  margin-left: 65px;
  color: #000;
  cursor: pointer;
  background: #fff;
  padding: 15px 30px;
  border-radius: 23px;
  transition: 0.4s ease-in-out;
  &:hover{
    background: #f1a51b;
    color: #fff;
    transition: 0.4s ease-in-out;
  }
`;
const Main = styled.div``;
const MainContent = styled.div`
  width: 78%;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 10%;
`;
const MainHeading = styled.h2`
  font-size: 40px;
  color: #fff;
  font-weight: 800;
  @media all and (max-width:480px){
    font-size: 24px;
  }
`;
const MainPara = styled.p`
  max-width: 100%;
  color: #fff;
  line-height: 1.3em;
  @media all and (max-width:480px){
    display:none;
  }
`;
const Mainbutton = styled.button`
  padding: 18px 41px;
  background: #fff;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  transition: 0.4s ease-in-out;
  &:hover{
    background: #f1a51b;
    color: #fff;
    border-radius: 20px;
    transition: 0.4s ease-in-out;
  }
`;
const Date = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 0 89px;
  margin: 0 auto;
  border-radius: 15px 15px 0 0;
  @media all and (max-width:980px){
    padding: 0 16px;
    width: 100%;
  }
  @media all and (max-width:768px){
    flex-wrap:wrap;
  }
  @media all and (max-width:640px){
    justify-content: center;
    width: 77%;
  }
  @media all and (max-width:480px){
    width:90%;
  }
`;
const DateBooking = styled.div`
  margin-left: 20px;
  @media all and (max-width:768px){
      width: 55%;
  }
  @media all and (max-width:768px){
    width: 68%;
  }
`;
const Arrival = styled.h5`
  color: #7e7e7e;
`;
const DateForm = styled.form`
  color: #7e7e7e;
`;
const DateInput = styled.input`
  color: #7e7e7e;
  background: #eeeeee;
  border: none;
  padding: 5px;
  border-radius: 12px;
`;
const Button = styled.button`
  color: #fff;
  margin-left: 20px;
  background: #000;
  padding: 7px 20px;
  border-radius: 5px;
  border: none;
  transition: 0.4s ease-in-out;
  &:hover{
    background: #f1a51b;
    color: #fff;
    border-radius: 20px;
    transition: 0.4s ease-in-out;
  }
  
  
  @media all and (max-width:1080px){
    padding: 7px 2px;
  }
  @media all and (max-width:640px){
    text-align: center;
    margin: 15px auto;
    display: block;
  }
`;
