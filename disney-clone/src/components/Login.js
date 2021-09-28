import React from 'react'
import styled from "styled-components";
function Login() {
    return (
            <Container>
                <Content>
                    content
                </Content>
            </Container>
        
    );
};

const Container = styled.section`
    overflow:hidden;
    display:flex;
    flex-direction:column;
    text-align:center;
    height:100%;
`;

const Content = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    margin-bottom:10vh;
        
`;

export default Login;
;