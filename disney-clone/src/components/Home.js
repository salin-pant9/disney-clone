import React from 'react'
import styled from "styled-components"
import ImageSlider from './ImageSlider';

function Home() {
    return (
        <Container>
           <ImageSlider/>

            

        </Container>
    )
}

const Container = styled.main`
    position:relative;
   background:url("/images/home-background.png") center center / cover no-repeat fixed;
    top:70px;
    min-height:calc(100vh-250px);
    height:calc(100vh - 72px);
    width:100vw;
    display:block;
    padding:0 calc(3.5vw + 5px);
    overflow-x:hidden;
    
`;

export default Home;
