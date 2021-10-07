import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {useSelector} from "react-redux";
import {selectRecommend} from "../features/movies/movieSlice"
function Recommends() {
    const movies = useSelector(selectRecommend);
    return (
        <Container>
            <h3>Recommended for you</h3>

            <Content>
              {movies && movies.map((movie,key) => (
                  <Wrap key={key}>
                      {movie.key}
                      <Link to={'/details/' + movie.id}>
                          <img src={movie.cardImg} alt={movie.title} />
                      </Link>
                  </Wrap>
              ))}

            </Content>
        </Container>
    )
};
const Container = styled.div`
    padding: 0 0 26px;
`;
const Content = styled.div`
    margin-top:15px;
    display:grid;
    grid-gap:25px;
    gap:25px;
    grid-template-columns: repeat(4,minmax(0,1fr));

    @media (max-width:768px) {
        grid-template-columns: repeat(2,minmax(0,1fr));
    }
`;
const Wrap =styled.div`
    padding-top:56.2%;
    border-radius:10px;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 13%) 0px 16px 10px -10px;
    position:relative;
    overflow:hidden;
    cursor:pointer;
    transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    border:3px solid rgba(249, 249,249,0.1 );

    img{
       inset:0px;
       height:100%;
       opacity:1;
       display:block;
       object-fit:cover;
       position:absolute;
       width:100%;
       z-index:1;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249,249,0.8);
    }
`;

export default Recommends;

