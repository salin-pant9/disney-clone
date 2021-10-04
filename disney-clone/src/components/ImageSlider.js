import React from 'react'
import styled from "styled-components";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

function ImageSlider() {
    let setting = {
        dots: true,
        infinite: true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay: true,
    }

    return (
        
           <Carousel {...setting}>
              <Wrap>
                  <a>
                      <img src="/images/slider-badag.jpg" alt="" />
                  </a>
                 
              </Wrap>
              <Wrap>
                  <a>
                      <img src="/images/slider-badging.jpg" alt="" />
                  </a>
                 
              </Wrap>
              <Wrap>
                  <a>
                      <img src="/images/slider-scale.jpg" alt="" />
                  </a>
                 
              </Wrap>
              <Wrap>
                  <a>
                      <img src="/images/slider-scales.jpg" alt="" />
                  </a>
                 
              </Wrap>
            </Carousel>
       
    )
}

const Carousel = styled(Slider)`
    margin-top:10px;
    padding:5px;

    & > button {
        opacity:0;
        height:100%;

        &:hover {
            opacity:1;
            transition-duration:1.5s;
        }
    }

    ul li button {
        &:before {
            font-size:10px;
            color:rgb(150,158,171);
        }
    }
    li.slick-active button:before{
        color:white;
    }
    .slick-list {
        overflow:initial
    }
`;
const Wrap = styled.div`
    border-radius:4px;
    
   
      

    a {
        border-radius:4px;
        
        padding:4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        display:block;

        img {
            height:100%;
            width:100%;
            
        }
        &:hover {
            padding:0;
            border: 4px solid rgba(255,255,255,0.8);
            transition-duration:100ms;
        }
    }
`;

export default ImageSlider;
