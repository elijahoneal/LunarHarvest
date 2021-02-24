import React, {useState} from 'react'
import logo from '../images/LunarHarvest-logo.png';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
const Header = styled.header`
width: 90%;
display: flex;
justify-content: space-between;
align-items:center;
margin: 2rem 0;
background-color: rgb(255, 255, 255);
padding: 0 5% 2rem;
border-bottom: 1rem solid rgb(244, 224, 142);

.desktop{
  background-color: #F4E08E;
  position:fixed;
  z-index:1;
  top:9.5rem;
  right:0;
  width:100vw;
  height: 25vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-evenly;
  transition: transform 0.5s ease-in-out;
  transform: ${({ active }) => active ? 'translateX(0)' : 'translateX(150px)'};
  a{
    color:#3D291B;
    font-size: 1.3rem;
    margin:auto;
    padding:0.3rem 0.2rem;
    width:100%;
  }
}
    img{
        width:60%;
        height:auto;
    }
    .line{
        width: 4rem;
        height: 0.5rem;
        margin: 0.5rem 0;
        background-color: #7D5118;
    }
`

const Nav = () => {
  const [active, setActive] = useState(false);
    const toggle = () => {
    setActive(!active) 
    console.log(active)
  }
    return (
        <Header>
        <img src ={logo} alt="lunar harvest logo"/>
        <nav>
          <div onClick={toggle} className="mobile">
            <div  className=" line line1"></div>
            <div  className=" line line2"></div>
            <div  className=" line line3"></div>
          </div>
        </nav>
        <nav active={active} className='desktop'>   
              <NavLink onClick={toggle} to ='/'>Home</NavLink>
              <NavLink onClick={toggle} to ='/about'>About</NavLink>
              <NavLink onClick={toggle} to ='/contact'>Contact</NavLink>
        </nav>
      </Header>

    )
}

export default Nav;