import React from 'react'
import fb from '../images/facebook.svg'
import ig from '../images/instagram.svg'
import styled from 'styled-components'

const Foot = styled.footer`
display:flex;
flex-direction: column;
background-color:#F4E08E;
    padding: 0.5rem 0;
.social{
    width:60%;
    margin:auto;
    display;flex;
    
}
img{
    width:15%;
    height:auto;
    margin:0.5rem;
}

`
const Footer = () => {
    return(
        <Foot>
            <section className='social'>
                <img src={fb} alt='facebook.com/lunarharvest'/>
                <img src={ig} alt='instagram.com/lunarharvest.farm'/>
            </section>
            <p>Find Us On Social Media | Lunar Harvest - &copy; 2021 </p>
        </Foot>
    )
}

export default Footer