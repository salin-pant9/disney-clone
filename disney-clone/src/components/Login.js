import React from 'react'
import styled from "styled-components";
function Login() {
    return (
            <Container>
                <Content>
                    <CTA>
                        <CTALogoone src="/images/cta-logo-one.svg" alt="" />
                        <SignUp>Get All There</SignUp>
                        <CTALogotwo src="/images/cta-logo-two.png" alt="" />
                    </CTA>
                   <BgImage/>
                </Content>
            </Container>
        
    );
};

const Container = styled.section`
    overflow:hidden;
    display:flex;
    flex-direction:column;
    text-align:center;
    height:100vh;
`;

const Content = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    margin-bottom:10vw;
    min-height:100vh;
    padding:88px 40px;
    height:100%;
    flex-direction:column;
        
`;
const BgImage = styled.div`
    background-image:url("/images/login-background.jpg");
    z-index:-1;
    height:100%;
    background-repeat:no-repeat;
    background-size:cover;
    position:absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
    backgroung-position:top;
`;
const CTA = styled.div`
    margin-bottom:2vw;
    margin-right:auto;
    margin-left:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    max-width:658px;
`;
const CTALogoone = styled.img`
    margin-bottom:12px;
    width:100%;
    max-width:688px;
    display:block;
`;
const SignUp = styled.a`
    font-weight:bold;
    background-color:#0063e5;
    font-size:18px;
    padding:16px 0;
    width:100%;
    border:1px solid transparent;
    border-radius:4px;
    letter-spacing:1.5px;
    margin-bottom:12px;

    &:hover {
        background-color:#0483ee;
    }
`;
const CTALogotwo = styled.img`
    width:100%;
    max-width:600px;
    margin-top:10px;
`;
export default Login;
