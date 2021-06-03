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
a ,p{
    text-decoration:none;
    color: #3D291B;
  }
  a {
    border: 0.25rem solid #F4E08E;
    padding: 0.25rem;
}
img{
    width: 25%;
    margin: 1rem 0;
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