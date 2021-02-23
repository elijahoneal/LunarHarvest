import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// images
import beets1 from '../images/beets-1.jpg'
import broccoli3 from '../images/broccoli-3.jpg'
import carrot1 from '../images/carrot-1.jpg'
import dill1 from '../images/dill-1.jpg'
import kohlrabi3 from '../images/kohlrabi-3.jpg'
import peashoot2 from '../images/peashoots-2.jpg'


const HomePage = styled.section`

width: 90%;
margin: auto;

h1{

    font-size:2rem;
  }
a{
    border: 0.1rem solid #7D5118;
    padding: 0.1rem 0.3rem;
    font-size: 1.3rem;
    &:hover{
        background-color: #7D5118;
        color: #fff;
    }
}

`

const Article = styled.article`
text-align:left;
a ,p{
    text-decoration:none;
    color: #3D291B;
  }
`
const Gallery = styled.section`
display: flex;
flex-direction:column;
align-items:center;
    figure{
        margin-bottom:1.5rem;
        font-size: 1.3rem;
    }
    figcaption{
        color:#3D291B;
        margin-bottom:1rem;
    }
    img{
        width:90%;
        height:auto;
        border-radius: 50%;
        border: 1rem solid #F4E08E;
    }

`

const Home = () => {

    return (
        <HomePage className='homepage'>
            <Article>
            <h1>Thank you for visiting!</h1>
                <p>
                So you may be asking right now "What are microgreens?" Microgreens are vegetables and herbs that are intentionally harvested before reaching full maturity. They are older than sprouts and provide the most nutrients a few weeks after sprouting from the seeds.
                </p>
                <p>
                    Below are are a few of the microgreens that I currently offer. For more information about microgreens please visit our about section.
                </p>
                <Link to='/about'>About</Link>
            </Article>
            <Gallery>
                <figure>
                        <figcaption><h3>Beets</h3></figcaption>
                        <img src={beets1} alt="beets microgreens"/>
                </figure>
                <figure>
                        <figcaption><h3>Broccoli</h3></figcaption>
                        <img src={broccoli3} alt="broccoli microgreens"/>
                </figure>
                <figure>
                        <figcaption><h3>Carrots</h3></figcaption>
                        <img src={carrot1} alt="carrot microgreens"/>
                </figure>
                <figure>
                        <figcaption><h3>Dill</h3></figcaption>
                        <img src={dill1} alt="dill microgreens"/>
                </figure>
                <figure>
                        <figcaption><h3>Kohlrabi</h3></figcaption>
                        <img src={kohlrabi3} alt="kohlrabi microgreens"/>
                </figure>
                <figure>
                        <figcaption><h3>Peashoots</h3></figcaption>
                        <img src={peashoot2} alt="peashoots microgreens"/>
                </figure>
            </Gallery>
       </HomePage>
    )
}

export default Home;