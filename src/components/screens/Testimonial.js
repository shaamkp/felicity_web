import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import ComaImage from "../assets/images/te1.png";
import Bg from "../assets/images/tes_bg.jpg";

export default function Testimonial() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive:[
      {
        breakpoint:768,
        settings:{
          slidesToShow:1,
        }
      }
    ]
  };
  return (
    <>
      <Main>
        <Wrapper>
          <MainContent>
            <MainTitle>Testimonial</MainTitle>
            <Slider {...settings}>
              <MainPerson>
                <MainComa>
                  <ComaImg src={ComaImage} alt="Image" />
                </MainComa>
                <MainPersonTitle>Mark Johnson</MainPersonTitle>
                <MainPersonPara>
                  There are many varition of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by
                  injected humour.
                </MainPersonPara>
              </MainPerson>

              <MainPerson>
                <MainComa>
                  <ComaImg src={ComaImage} alt="Image" />
                </MainComa>
                <MainPersonTitle>John Doe</MainPersonTitle>
                <MainPersonPara>
                  There are many varition of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by
                  injected humour.
                </MainPersonPara>
              </MainPerson>

              <MainPerson>
                <MainComa>
                  <ComaImg src={ComaImage} alt="Image" />
                </MainComa>
                <MainPersonTitle>Stalin John</MainPersonTitle>
                <MainPersonPara>
                  There are many varition of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by
                  injected humour.
                </MainPersonPara>
              </MainPerson>

              <MainPerson>
                <MainComa>
                  <ComaImg src={ComaImage} alt="Image" />
                </MainComa>
                <MainPersonTitle>Lenin</MainPersonTitle>
                <MainPersonPara>
                  There are many varition of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by
                  injected humour.
                </MainPersonPara>
              </MainPerson>
            </Slider>
          </MainContent>
        </Wrapper>
      </Main>
    </>
  );
}

const Main = styled.section`
  background: url(${Bg});
  background-size: cover;
  padding-bottom: 200px;
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
const MainContent = styled.div``;
const MainTitle = styled.h3`
  font-size: 40px;
  text-align: center;
`;
const MainPerson = styled.div`
  background: #d75430;
  width: 87% !important;
  position: relative;
  padding: 10px 30px;
  @media all and (max-width:1080px){
    width: 80% !important;
  }
  @media all and (max-width:768px){
    width: unset !important;
  }
`;
const MainComa = styled.div`
  width: 8%;
  position: absolute;
  right: 5%;
  top: 14%;
`;
const ComaImg = styled.img`
  display: block;
  width: 100%;
`;
const MainPersonTitle = styled.h5`
  color: #ffffff;
`;
const MainPersonPara = styled.p`
  font-size: 15px;
  color: #fff;
  line-height: 1.7em;
`;
