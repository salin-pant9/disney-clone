import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import {useParams} from "react-router-dom";
import db from "../firebase";

function Detail() {
    const {id} = useParams();
    const [detailData,setDetailData] = useState({});

    useEffect(() => {
        db.collection('movies').doc(id).get().then((doc)=> {
            if(doc.exists){
               setDetailData(doc.data())
            }else{
                console.log("No such data");
            }
        }).catch(err => alert(err));
    },[id]);
    return (
        <Container>
           <Background>
               <img src={detailData?.backgroundImg} alt={detailData?.title}/>
           </Background>
           <ImageTitle>
               <img src={detailData?.titleImg} alt="" />
           </ImageTitle>
           <ContentMeta>
               <Controls>
                   <Player>
                       <img src="/images/play-icon-black.png" alt=""/>
                       <span>Play</span>
                   </Player>
                   <Trailer>
                       <img src="/images/play-icon-white.png" alt=""/>
                       <span>Trailer</span>
                   </Trailer>
                   <AddList>
                       <span>+</span>
                   </AddList>
                   <GroupWatch>
                       <img src="/images/group-icon.png" alt="" />
                   </GroupWatch> 
               </Controls>
               
           </ContentMeta>
           <SubTitle>
                  {detailData?.subTitle}
            </SubTitle>
            <Description>{detailData?.description}</Description>
        </Container>
    )
}

const Container = styled.div`
    position:relative;
    min-height: calc(100vh-250px);
    top:72px;
    padding:0px calc(3.5vw + 5px);
    display:block;
    overflow-x: hidden;
`;
const Background = styled.div`
    position:fixed;
   left:0px;
   right:0px;
   top:0px;
   opacity:0.8;
   z-index:-1;

   img{
       height:100vh;
       width:100vw;

       @media(max-width:768px){
           width:initial;
       }
   }
`;
const ImageTitle = styled.div`
   height:30vw;
   min-height:170px;
   width:100%;
   display:flex;

   align-items:flex-end;
   margin:0px auto;
   padding-bottom:24px;

   

   img {
       max-width:600px;
       min-width:200px;
       width:35vw;
   }
`;
const ContentMeta = styled.div`
   max-width:874px;
   display:flex;
   width:100%;
   
`;
const Controls = styled.div`
   display:flex;
   align-items:center;
   justify-content:space-evenly;

`;
const Player = styled.button`
   display:flex;
   align-items:center;
   font-size:15px;
   color:black;
   text-transform:uppercase;
   letter-spacing:0.8px;
   padding:0px 24px;
   border-radius:4px;
   border:none;
   cursor:pointer;
   height:56px;
   margin:0px 22px 0px 0px;

   img{
       width:32px;
    }
    &:hover {
        background-color:rgba(198, 198,198,0.3);
    }

    @media (max-width:768px) {
        height:45px;
        padding:0px 12px ;
        font-size:12px;
        margin:0px 10px 0px 0px;

        img{
            width:24px;
        }
    }
`;
const Trailer = styled(Player)`
    background-color:rgba(0,0,0,0.3);
    border:1px solid rgb(249,249,249);
    color:rgb(249,249,249);

`;
const AddList = styled.div`
    border:2px solid white;
    border-radius:50%;
    width:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    height:50px;
    font-size:25px;
    font-weight:bold;
    background-color:rgba(0,0,0,0.5);
    cursor:pointer;
    
    &:hover {
        background-color:rgba(198, 198,198,0.3);
    }
    @media(min-width:768px){
        height:70px;
        width:70px;
        font-size:30px;
        margin-left:10px;
    }
`;
const GroupWatch = styled(AddList)`
    margin-left:10px;
    @media(min-width:768px){
        margin-left:20px;
    }
`;
const SubTitle = styled.div`
    font-size:15px;
    min-height:20px;
    color:rgb(249, 249,249);
    margin-top:20px;
    padding:10px;

    @media(max-width:768px){
        font-size:12px;
    }
`;
const Description = styled.div`
    margin-top:30px;
    padding: 16px 0px; 
    font-size:20px;
    // line-height:1.4px;
    color:rgb(249,249,249);

    @media(max-width:768px){
        font-size:14px;
    }
`;
export default Detail;
