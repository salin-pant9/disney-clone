import React,{useEffect} from 'react'
import styled from "styled-components"
import ImageSlider from './ImageSlider';
import NewToDisney from './NewToDisney';
import Originals from './Originals';
import Recommends from './Recommends';
import Trending from './Trending';
import Viewers from './Viewers';
import {useDispatch,useSelector} from "react-redux";
import {setMovies} from "../features/movies/movieSlice";
import db from "../firebase";
import {selectUsername} from "../features/user/userSlice";
function Home() {
    const dispatch = useDispatch();
    const userName = useSelector(selectUsername);
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trendings = [];

    useEffect(() => {
        db.collection('movies').onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                switch(doc.data().type){
                    case "recommend":
                       recommends = [...recommends,{id:doc.id,...doc.data()}];
                        break;
                    case "new":
                        newDisneys= [...newDisneys,{id:doc.id,...doc.data()}];
                        break;
                    case "original":
                        originals = [...originals,{id:doc.id,...doc.data()}];
                        break;
                    case "trending":
                        trendings = [...trendings,{id:doc.id,...doc.data()}];
                        break;
                };
            });
        

        dispatch(
            setMovies({
            recommend:recommends,
            newDisney:newDisneys,
            original:originals,
            trending:trendings,

            })
        )});
    },[userName]);
    return (
        <Container>
           <ImageSlider/>
            <Viewers/>
            <Recommends/>
            <NewToDisney/>
            <Originals/>
            <Trending/>
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
