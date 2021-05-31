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

const Partners = () => {
    return (
        <Article>
        <h2>Vertical Gardening and Suppliments</h2>
        <p>
        If you are interested in starting your own vertical garden here is a great place to start. Vertical Gardening is a great alternative to traditional farming. It saves space, can be used indoors or outdoors, and the entire process is soiless which makes it less messy. As both a consumer, and representative of the vertical gardening towers, I would be more than happy to assist you in finding the best solution to grow food in your home. Click the link below to get started or email me directly for more information.</p>
        <a href="https://jalynne.towergarden.com/" target="_blank">Start A Garden</a>
        <p>If you want to add more nutrition to your daily routine you've come to the right place. In addtion to the vertical garden, I offer vitamin suppliments in the form of: capsules, gummies, and protein powders. Click the link below to get started or email me directly for more information. </p>
       
        <a href=" https://jalynne.juiceplus.com/us/en" target="_blank">Improve Your Day</a>
    </Article>
    )
}

export default Partners