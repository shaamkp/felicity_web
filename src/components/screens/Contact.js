import React from "react";
import styled from "styled-components";

export default function Contact() {
  return (
    <>
      <Main>
        <Wrapper>
          <MainLeft>
            <MainTitle>Contact Us</MainTitle>
            <MainSubTitle>
              Free download Landing page Felicity Hotel
            </MainSubTitle>
            <MainPara>
              There are many varition of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour.
            </MainPara>
          </MainLeft>
          <MainRight>
            <MainForm>
              <MainInputText
                type="text"
                placeholder="Full Name"
              ></MainInputText>
              <MainInputEmail type="email" placeholder="Email"></MainInputEmail>
              <MainPhoneNumber
                type="tel"
                max-length="10"
                placeholder="Phone Number"
              ></MainPhoneNumber>
              <MainTextarea cols="3" rows="2" placeholder="Message" />
              <MainButton>Send</MainButton>
            </MainForm>
          </MainRight>
        </Wrapper>
      </Main>
    </>
  );
}

const Main = styled.section`
  padding-top: 50px;
  background: black;
  padding-bottom: 50px;
`;
const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1080px;
  display: flex;
  position: relative;
  @media all and (max-width:980px){
      flex-wrap: wrap;
      position:unset;
  }
`;
const MainLeft = styled.div`
  width: 50%;
  @media all and (max-width:980px){
      width:100%;
      margin-bottom: 40px;
  }
`;
const MainTitle = styled.h2`
  color: #fff;
  font-size: 40px;
  @media all and (max-width:980px){
      text-align: center;
  }
`;
const MainSubTitle = styled.h2`
  color: #fff;
  font-size: 34px;
  width: 400px;
  @media all and (max-width:980px){
      text-align: center;
      width: 100%;
  }
`;
const MainPara = styled.p`
  color: #fff;
  font-size: 16px;
  line-height: 1.9em;
  width: 481px;
  @media all and (max-width:1080px){
      font-size: 14px;
      width: 430px;
  }
  @media all and (max-width:980px){
      width: 63%;
      text-align: center;
      margin: 0 auto;
  }
`;
const MainRight = styled.div`
  background: #d75430;
  width: 34%;
  padding: 30px;
  border-radius: 15px;
  position: absolute;
  right: 0;
  bottom: 27%;
  @media all and (max-width:980px){
      position:unset;
      margin: 0 auto;
      width: 100%;
      border-radius: 0px;
  }
`;
const MainForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const MainInputText = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: none;
`;
const MainInputEmail = styled.input`
  margin-top: 20px;
  padding: 10px;
  border-radius: 8px;
  border: none;
`;
const MainPhoneNumber = styled.input`
  margin-top: 20px;
  padding: 10px;
  border-radius: 8px;
  border: none;
`;
const MainTextarea = styled.textarea`
  margin-top: 30px;
  padding: 30px;
  border-radius: 8px;
  margin-bottom: 30px;
`;
const MainButton = styled.a`
    text-align: center;
    background: #000;
    color: #fff;
    margin: 0 auto;
    width: 20%;
    padding: 10px 28px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.4s ease-in-out;
    &:hover{
    background: #f1a51b;
    color: #fff;
    border-radius: 20px;
    transition: 0.4s ease-in-out;
  }
    @media all and (max-width:980px){
        width: 80%;
    }
`;
