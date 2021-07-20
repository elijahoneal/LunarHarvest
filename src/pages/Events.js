import React from 'react'
import styled from 'styled-components'
import jaxVegFest from '../images/jaxVegFest.jpg'
const EventSec = styled.section`
margin: 2rem auto;
`
const Article = styled.article`
width: 90%;
display:flex;
margin: 2rem auto;
justify-content:space-around;
text-align:left;
    p{
    text-decoration:none;
    color: #3D291B;
  }
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
img{
    width: 25%;
    height:auto;
    margin: 1rem 0;
    border-radius: 25px;
}
section{
    margin:0 1rem;
}
`
const Events = () => {

    return (
        <EventSec>
            <h2>Upcoming Events</h2>
        <Article>
            <img src={jaxVegFest} alt='Jax Veg Vest'/>
            <section>
              <h3>September 2021 Jax Veg Vest</h3>
              <p>Saturday, September 4th, 2021</p>
              <p>11am - 5pm EST</p>

            <p>
            Lunar Harvest will be at the Jax Veg Fest on  September 4th! We will have microgreens available for sale and information about vertical gardening. See you soon! Please click the link below for more information about the event.
            </p>
            <a href=' jaxvegfest.weebly.com' target="_blank">Jax Veg Fest</a>
            </section>
           
        </Article>
        <Article>
            <img src={jaxVegFest} alt='Jax Veg Vest'/>
            <section>
              <h3>June 2021 Jax Veg Vest</h3>
              <p>Saturday, June 5, 2021</p>
              <p>10am - 4pm EST</p>

            <p>
            Lunar Harvest will be at the Jax Veg Fest on  June 5th! We will have microgreens available for sale and information about vertical gardening. See you soon! Please click the link below for more information about the event.
            </p>
            <a href='https://www.facebook.com/events/774186369772109/?active_tab=discussion' target="_blank">Jax Veg Fest</a>
            </section>
           
        </Article>
  
</EventSec>
    )
}

export default Events