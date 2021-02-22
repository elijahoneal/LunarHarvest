import React from 'react'
import styled from 'styled-components'
// images
import beets1 from '../images/beets-1.jpg'
import broccoli3 from '../images/broccoli-3.jpg'
import carrot1 from '../images/carrot-1.jpg'
import dill1 from '../images/dill-1.jpg'
import kohlrabi3 from '../images/kohlrabi-3.jpg'
import peashoot2 from '../images/peashoots-2.jpg'

const Gallery = styled.section`
display: flex;
flex-direction:column;
align-items:center;
    figure{
        margin-bottom:1.5rem;
        font-size: 1.3rem;
    }
    figcaption{
        margin-bottom:1rem;
    }
    img{
        width:75%;
        height:auto;
        
    }

`

const Home = () => {

    return (
       <Gallery>
           <figure>
                <figcaption>Beets</figcaption>
                <img src={beets1} alt="beets microgreens"/>
           </figure>
           <figure>
                <figcaption>Broccoli</figcaption>
                <img src={broccoli3} alt="broccoli microgreens"/>
           </figure>
           <figure>
                <figcaption>Carrots</figcaption>
                <img src={carrot1} alt="carrot microgreens"/>
           </figure>
           <figure>
                <figcaption>Dill</figcaption>
                <img src={dill1} alt="dill microgreens"/>
           </figure>
           <figure>
                <figcaption>Kohlrabi</figcaption>
                <img src={kohlrabi3} alt="kohlrabi microgreens"/>
           </figure>
           <figure>
                <figcaption>Peashoots</figcaption>
                <img src={peashoot2} alt="peashoots microgreens"/>
           </figure>
       </Gallery>
    )
}

export default Home;