import React from 'react'
import styled from 'styled-components';
import { auth, provider } from '../firebase';
import {useDispatch,useSelector} from "react-redux";
import {useHistory } from "react-router-dom";
import {selectUsername,selectUseremail,selectUserphoto, setUserLoginDetails} from "../features/user/userSlice";

function Header() {
    const history = useHistory();
    const dispatch = useDispatch();
   const username = useSelector(selectUsername);
   const useremail = useSelector(selectUseremail);
   const userphoto = useSelector(selectUserphoto);

    const handleAuth = () => {
        auth.signInWithPopup(provider).then((result) => {
           setUser(result.user);
        }).catch(err => {
            alert(err.message);
        }) 
    }
    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name:user.displayName,
            email:user.email,
            photo : user.photoURL,
        }))
    }
    return (
      <Nav>
          <Logo>
              <img src="/images/logo.svg" alt="Disney +" />
          </Logo>
          <NavMenu>
              <a href="/home">
                  <img src="/images/home-icon.svg" alt="Home"/>
                  <span>Home</span>
              </a>
              <a href="/movie">
                  <img src="/images/movie-icon.svg" alt="Home"/>
                  <span>Movies</span>
              </a>
              <a href="/original">
                  <img src="/images/original-icon.svg" alt="Home"/>
                  <span>Original</span>
              </a>
              <a href="/search">
                  <img src="/images/search-icon.svg" alt="Home"/>
                  <span>Search</span>
              </a>
              <a href="/series">
                  <img src="/images/series-icon.svg" alt="Home"/>
                  <span>Series</span>
              </a>
              <a href="/watchlist">
                  <img src="/images/watchlist-icon.svg" alt="Home"/>
                  <span>Watchlist</span>
              </a>
          </NavMenu>
          <Login onClick={handleAuth}>Login</Login>
      </Nav>
    )
};

const Nav = styled.nav`
    height:60px;
    padding:0 30px;
    display:flex;
    align-items:center;
    position:fixed;
    top:0;
    background-color: #040714;
    justify-content:space-between;
    width:100%;
    z-index:3;
`;
const Logo = styled.a`
    padding:0;
    width:80px;
    margin-top:4px;
    max-height:70px;
    


    img {
        width:100%;
    }
`;
const NavMenu = styled.div`
    display:flex;
    flex-flow: row nowrap;
    align-items:center;
    height:100%;
    padding:0;
    margin:0;
    position:relative;
    justify-content:flex-end;
    margin-right:auto;
    margin-left:25px;

    a {
        display:flex;
        align-items:center;
        padding:0 12px;

        img{
            height:20px;
            width:20px;
            z-index:auto;
        }

        span{
            padding:0 5px;
            position:relative;
            
            &:before {
                content:'';
                background-color:rgb(249,249,249);
                display:block;
                height:2px;
                bottom:-6px;
                border-radius:0px 0px 4px 4px;
                opacity:0;
                visibility:hidden;
                position:absolute;
                left:0px;
                right:0px;
                transform-origin:left center;
                transform:scaleX(0);
                transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
                width:auto;
        
            }
        }
        &:hover {
            span:before {
                visibility:visible;
                opacity:1 !important;
                transform:scaleX(1);
            }
        }
    }

    @media(max-width:768px) {
        display:none;
    }
`;
const Login = styled.a`
    background-color:rgba(0,0,0,0.6);
    text-transform :uppercase;
    padding:8px 16px;
    border:1px solid #f9f9f9;
    border-radius:4px;
    transition:all 0.2s ease 0s;

    &:hover {
        background-color: #f9f9f9;
        color:#000;
    }
`;

export default Header;
