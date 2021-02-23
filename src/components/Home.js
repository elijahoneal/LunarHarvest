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
article {
   text-align:left;
}
h1{
    color:#7D5118;
    font-size:2rem;
}
p{
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
            <article>
            <h1>Thank you for visiting!</h1>
                <p>
                Lunar Harvest is an idea that began to take shape in 2018. I moved to Orlando, FL a year earlier with aspirations of becoming a graphic designer. However, by mid 2018, I still had not made much progress on that career path. I started to wonder if there was something else that I was meant to do. Around that same time, I'd been watching alot of gardening/ farming videos which led me to try my hand at it. I had a small porch area where I experimented with different plants. The first plant I grew was a marigold I got from a market in Jacksonville, and I enjoyed nurturing and watching it grow. Next I tried a tomato plant which was a failure the first try. A few attempts later, I found success! Beautiful fruits started to grow from the thick vine. From that moment on I was hooked and decided on a new career path. One that would see organic nutrient dense food on peoples tables. I moved back to Jacksonville in May of 2019 and made preparations to start in earnest. The rest is history.
                </p>
                <p>
                    Below are are a few of the microgreens that I currently offer. For more information about microgreens please visit our about section.
                </p>
            </article>
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