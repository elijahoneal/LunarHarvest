import React from 'react'
import logo from '../images/LunarHarvest-logo.png';
import styled from 'styled-components'

const Header = styled.header`
width: 90%;
display: flex;
justify-content: space-between;
align-items:center;
margin: 2rem 5%;
background-color: rgb(255, 255, 255);
padding-bottom: 2rem;
border-bottom: 1rem solid rgb(244, 224, 142);
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
    return (
        <Header>
        <img src ={logo} alt="lunar harvest logo"/>
        <nav>
          <div className="mobile">
            <div className=" line line1"></div>
            <div className=" line line2"></div>
            <div className=" line line3"></div>
          </div>
        </nav>
      </Header>

    )
}

export default Nav;