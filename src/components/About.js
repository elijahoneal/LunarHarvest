import React from 'react'
import styled from 'styled-components'

const AboutSec = styled.section`
margin: 2rem auto;
`
const Article = styled.article`
width: 90%;
margin:0 auto 2rem;

text-align:left;
a ,p{
    text-decoration:none;
    color: #3D291B;
  }
`

const About = () => {
    return (
    <AboutSec>
            <Article>
                <h2>About Lunar Harvest</h2>
                <p>
                Lunar Harvest is an idea that began to take shape in 2018. I moved to Orlando, FL a year earlier with aspirations of becoming a graphic designer. However, by mid 2018, I still had not made much progress on that career path. I started to wonder if there was something else that I was meant to do. Around that same time, I'd been watching alot of gardening/ farming videos which led me to try my hand at it. I had a small porch area where I experimented with different plants. The first plant I grew was a marigold I got from a market in Jacksonville, and I enjoyed nurturing and watching it grow. Next I tried a tomato plant which was a failure the first try. A few attempts later, I found success! Beautiful fruits started to grow from the thick vine. From that moment on I was hooked and decided on a new career path. One that would see organic nutrient dense food on peoples tables. I moved back to Jacksonville in May of 2019 and made preparations to start in earnest. The rest is history.
                </p>
                <p>For more in depth information about microgreens, please click the link below to a presentation hosted by the Garden Club of Jacksonville</p>
            </Article>
           
            <iframe width="90%" height="400" src="https://www.youtube.com/embed/iXbsclFnAdI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </AboutSec>
    )
}

export default About