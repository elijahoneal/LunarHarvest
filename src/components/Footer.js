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
    height:auto;
    margin:auto;
    display;flex;
    
}
img{
    width:15%;
    height:auto;
    margin:0.5rem;
}
@media only screen and (min-width: 768px) {
   img{
       width:8%;
   }
}
@media only screen and (min-width: 1024px) {
    img{
        width:5%;
    }
   
}
`
const Footer = () => {
    return(
        <Foot>
            <section className='social'>
                <a href='https://www.facebook.com/LunarHarvestFarms' target='_blank' ><img src={fb} alt='facebook.com/lunarharvestfarms'/></a>
                <a href='https://www.instagram.com/lunarharvest.farm/' target='_blank' > <img src={ig} alt='instagram.com/lunarharvest.farm'/></a>              
            </section>
            <p>Find Us On Social Media | Lunar Harvest - &copy; 2021 </p>
        </Foot>
    )
}

export default Footer