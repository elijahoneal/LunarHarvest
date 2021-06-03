import React from 'react'
import styled from 'styled-components'
import garden from '../images/vertical-garden-1.jpg'
import garden2 from '../images/vertical-garden-2.jpg'
import garden3 from '../images/vertical-garden-3.jpg'
import juicePlusCaps from '../images/juicePlusCaps.png'
import juicePlusShakes from '../images/juicePlusShakes.png'
import juicePlusSnacks from '../images/juicePlusSnacks.png'
const Article = styled.article`
width: 90%;
margin:0 auto 2rem;

text-align:left;
a{
    text-decoration:none;
    background-color: #F4E08E;
    color: #7D5118;
    padding: 0.35rem;
    transition: transform 0.5s;
   &:hover {
        color:green;
    }
   
}
p{
    color: #3D291B;
  }
section {
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: space-between;
    img{
        width: 100%;
        height: auto;
        margin-bottom: 0.5rem;
       
    }
    @media only screen and (min-width: 768px) {
        flex-direction:row;
        img {
            width:30%;
        }
      }
}
`

const Partners = () => {
    return (
        <Article>
        <h2>Vertical Gardening and Suppliments</h2>
        <section>
            <img src={garden} alt='Vertical Garden - Cucumbers' />
            <img src={garden2} alt='Vertical Garden - Herbs' />
            <img src={garden3} alt='Vertical Garden - 3 towers' />
        </section>
        <p>
        If you are interested in starting your own vertical garden here is a great place to start. Vertical Gardening is a great alternative to traditional farming. It saves space, can be used indoors or outdoors, and the entire process is soiless which makes it less messy. As both a consumer, and representative of the vertical gardening towers, I would be more than happy to assist you in finding the best solution to grow food in your home. Click the link below to get started or email me directly for more information.</p>
        <a href="https://jalynne.towergarden.com/" target="_blank">Start A Garden</a>
        <section>
            <img src={juicePlusCaps} alt='Juice Plus Capsules' />
            <img src={juicePlusShakes} alt='Juice Plus Protein Shakes' />
            <img src={juicePlusSnacks} alt='Juice Plus Snacks' />
        </section>
        <p>If you want to add more nutrition to your daily routine you've come to the right place. In addtion to the vertical garden, I offer vitamin suppliments in the form of: capsules, gummies, and protein powders. Click the link below to get started or email me directly for more information. </p>
       
        <a href=" https://jalynne.juiceplus.com/us/en" target="_blank">Improve Your Day</a>
    </Article>
    )
}

export default Partners