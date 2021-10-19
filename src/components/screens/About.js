import React from "react";
import styled from "styled-components";
import Video from "../assets/images/about_img.jpg";

export default function About() {
  return (
    <>
      <Main>
        <Wrapper>
          <MainContent>
            <MainLeft>
              <MainTitle>About Our Hotel</MainTitle>
              <MainPara>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
              </MainPara>
            </MainLeft>
            <MainRight>
              <Image src={Video} alt="Image" />
            </MainRight>
          </MainContent>
        </Wrapper>
      </Main>
    </>
  );
}

const Main = styled.section`
  background: #353e4e;
  padding-bottom: 50px;
  @media all and (max-width:980px){
    padding: 40px;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1080px;
  @media all and (max-width:1080px){
    width:85%;
    margin: 0 auto;
  }
`;
const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const MainLeft = styled.div`
  margin-top: 100px;
  @media all and (max-width:980px){
    width: 100%;
    margin-top: 0px;
  }
`;
const MainTitle = styled.h3`
  font-size: 40px;
  color: #fff;
  @media all and (max-width:980px){
    text-align:center;
  }
`;
const MainPara = styled.p`
  width: 514px;
  line-height: 1.5em;
  font-size: 18px;
  color: #fff;
  @media all and (max-width:1080px){
    font-size: 15px;
    width: 440px;
  }
  @media all and (max-width:980px){
    text-align: center;
    width: 100%;
  }
`;
const MainRight = styled.div`
  padding-top: 100px;
  width: 50%;
  cursor: pointer;
  @media all and (max-width:980px){
    display: none;
  }
`;
const Image = styled.img`
  display: block;
  width: 100%;
`;
