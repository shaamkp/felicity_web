import React from "react";
import styled from "styled-components";
import Rose from "../assets/images/img1.jpg";
import Hall from "../assets/images/img2.jpg";
import Out from "../assets/images/img3.jpg";
import Food from "../assets/images/img4.jpg";

export default function Facilities() {
  return (
    <>
      <Main>
        <Wrapper>
          <MainContent>
            <MainTop>
              <MainTopLeft>
                <MainHeading>
                  Choose The Perfect
                  <MainHeading2>
                    <br />
                    Accommodation
                  </MainHeading2>
                </MainHeading>

                <MainPara>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has
                </MainPara>
                <MainButton>See More</MainButton>
              </MainTopLeft>
              <MainTopRight>
                <TopImage1 src={Rose} alt="Image" />
                <TopImage2 src={Hall} alt="Image" />
                <TopImage3 src={Out} alt="Image" />
              </MainTopRight>
            </MainTop>
            <MainBottom>
              <MainBottomLeft>
                <BottomImage src={Food} alt="Image" />
              </MainBottomLeft>
              <MainBottomRight>
                <BottomHeading>
                  Our <br /> <BottomHeading2>Breakfast</BottomHeading2>
                </BottomHeading>
                <BottomPara>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has
                </BottomPara>
                <BottomButton>Read More</BottomButton>
              </MainBottomRight>
            </MainBottom>
          </MainContent>
        </Wrapper>
      </Main>
    </>
  );
}

const Main = styled.section`
  padding-top: 50px;
`;

const Wrapper = styled.div`
  width:90%;
  margin: 0 auto;
  max-width: 1080px;
  @media all and (max-width:1080px){
    width:85%;
    margin: 0 auto;
  }
`;
const MainContent = styled.div`
  
`;
const MainTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media all and (max-width:980px){
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
`;
const MainTopLeft = styled.div`
  width: 90%;
  @media all and (max-width:980px){
    padding-top: 80px;
    width: 100%;
  }
`;
const MainHeading = styled.h3`
  font-size: 35px;
  font-weight: 300;
  @media all and (max-width:980px){
    text-align: center;
  }
`;
const MainHeading2 = styled.span`
  font-weight: 700;
`;
const MainPara = styled.p`
  line-height: 1.9;
  font-size: 13px;
  width:660px;
  @media all and (max-width:1080px){
    width: 432px  ;
  }
  @media all and (max-width:980px){
    width:100%;
    text-align: center;
    margin-bottom: 30px;
  }
`;
const MainButton = styled.a`
  color: #fff;
  background: #000;
  padding: 7px 20px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  margin-top: 30px;
  transition: 0.4s ease-in-out;
  &:hover{
    background: #f1a51b;
    color: #fff;
    border-radius: 20px;
    transition: 0.4s ease-in-out;
  }
  @media all and (max-width:980px){
    display: block;
    text-align: center;
    width: 30%;
    margin: 0 auto;
  }
`;
const MainTopRight = styled.div`
  display: grid;
  grid-gap: 20px;
`;
const TopImage1 = styled.img`
  grid-column: 1 / span 2;
  width: 100%;
  display: block;
`;
const TopImage2 = styled.img`
  grid-column: 1;
  grid-row: 2;
  width: 100%;
  display: block;
`;
const TopImage3 = styled.img`
  grid-column: 2;
  grid-row: 2;
  width: 100%;
  display: block;
`;
const MainBottom = styled.div`
  padding-top: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 50px;
  @media all and (max-width:980px){
    flex-wrap: wrap;
  }
`;
const MainBottomLeft = styled.div`
  width: 45%;
  @media all and (max-width:980px){
    width : 100%;
  }
`;
const BottomImage = styled.img`
  width: 100%;
  height: 300px;
  display: block;
`;
const MainBottomRight = styled.div`
  width: 50%;
  text-align: end;
  @media all and (max-width:980px){
    width: 100%;
    text-align: center;
  }
`;
const BottomHeading = styled.h3`
  font-size: 35px;
  font-weight: 300;
`;
const BottomHeading2 = styled.span`
  font-weight: 700;
`;
const BottomPara = styled.p`
  font-size: 13px;
  line-height: 1.9em;
`;
const BottomButton = styled.a`
  color: #fff;
  background: #000;
  padding: 7px 20px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  margin-top: 20px;
  transition: 0.4s ease-in-out;
  &:hover{
    background: #f1a51b;
    color: #fff;
    border-radius: 20px;
    transition: 0.4s ease-in-out;
  }
  @media all and (max-width:980px){
    width: 30%;
  }
`;
