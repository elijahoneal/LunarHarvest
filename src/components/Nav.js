import React, {useState} from 'react'
import logo from '../images/LunarHarvest-logo.png';
import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'
const Header = styled.header`
width: 90%;
display: flex;
justify-content: space-between;
align-items:center;
margin: 2rem 0;
background-color: rgb(255, 255, 255);
padding: 0 5% 2rem;
border-bottom: 1rem solid rgb(244, 224, 142);
  img{
      width:60%;
      height:auto;
  }
`
const Navigation = styled.nav`
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    font-weight: 300;
    position:absolute;
    top:2.5rem;
    right:0;
    width: 5rem;
    height:100vh;
    z-index:1;
    overflow-X:visible;
    text-transform: uppercase;
    transition: transform 0.5s ease-in-out;
    @media only screen and (min-width: 768px) {
        .mobile {
         display:none;
        }
        .navlinks {
            display:flex;
            flex-direction: row;
            top:0;
            height:auto;

            transform: translateX(0);
        }
      }
    @media only screen and (min-width: 1024px) {
        
        .navlinks {
            position:fixed;
            width:15vw;
            height:100vh;
            flex-direction: column;
        }
    }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color:#3D291B;
    font-size: 1.3rem;
    margin:auto;
    padding:0.3rem 0.2rem;
    width:100%;
    


`
const Mobile = styled.nav`
    display:flex;
    flex-direction: column;
    justify-content:flex-start;
    width:20%;
    padding: 1rem 0.5rem;
    cursor:pointer;
    .line{
      width: 3rem;
      height: 0.5rem;
      margin: 0.25rem 0;
      background-color: #7D5118;
    }
    
`
const NavLinks = styled.nav`
    display: flex;
    flex-direction: column;
    background-color: #F4E08E;
    padding: 1rem;
    position: fixed;
    top:24vh;
    right:0;
    width:100%;
    height:76vh;
    justify-content:space-evenly;
    align-items: center;
    text-align: center;
    transition: transform 0.5s ease-in-out;
    transform: ${({ active }) => active ? 'translateX(0)' : 'translateX(100%)'};
    
`
const Nav = () => {
  const [active, setActive] = useState(false);
  const toggle = () => {
  setActive(!active) 
}
    return (
        <Header>
        <img src ={logo} alt="lunar harvest logo"/>
        <Navigation>
            <Mobile active={active} onClick={toggle} className='mobile'>
                <div className='line line1'></div>
                <div className='line line2'></div>
                <div className='line line3'></div>
            </Mobile>
            <NavLinks active={active} className='navlinks'>
                <StyledLink onClick={toggle} to = '/'>Home</StyledLink>
                <StyledLink onClick={toggle} to = '/about'>About</StyledLink>
                <StyledLink onClick={toggle} to = '/contact'>Contact</StyledLink>
            </NavLinks>
        </Navigation>
      </Header>

    )
}


export default Nav;