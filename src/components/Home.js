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
import fb from '../images/facebook.svg'
import ig from '../images/instagram.svg'
import towers from '../images/vertical-towers.jpg'
import seedlings from '../images/seedlings.jpg'

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
    color: #7D5118;
  
}

`

const Article = styled.article`
text-align:left;
a ,p{
    text-decoration:none;
    color: #3D291B;
    border:none;
    img{
        width:10%;
    }
  }
.pics{
    display:flex;
    justify-content: space-between;
}
img{
    width: 48%;
    margin: 1rem 0;
}
@media only screen and (min-width: 768px) {
    a{
        img{
            width:5%;
        }
      }
  }


`
const Gallery = styled.section`
display: flex;
flex-direction:column;
align-items:center;
    figure{
        margin:1.5rem auto;
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
    @media only screen and (min-width: 768px) {
        flex-flow:row wrap;
        figure{
          width:35%;
          
      }
      }
    @media only screen and (min-width: 1024px) {
        figure{
            width: 30%;
        }
       
    }

`

const Home = () => {

    return (
        <HomePage className='homepage'>
            <Article>
            <h1>Latest News</h1>
                <p>
                    Lunar Harvest is transitioning to Vertical Gardening! We will be sharing our progress on social media as we grow full grown herbs,fruits, and vegetables indoors. Follow us on Facebook and Instagram to see the new tools and products we'll be using.
                </p>
                <section className='pics'>
                    <img src={towers} alt='vertical garden towers for urban farming'/>
                    <img src={seedlings} alt='pea seeds starting to sprout'/>
                </section>
                <a href='#bottom'>Social Media Links Below</a>
            </Article>
            {/* <Article>
                <h2>Thank you for visiting!</h2>
                <p>
                So you may be asking right now "What are microgreens?" Microgreens are vegetables and herbs that are intentionally harvested before reaching full maturity. They are older than sprouts and provide the most nutrients a few weeks after sprouting from the seeds.
                </p>
                <p>
                    Below are are a few of the microgreens that I currently offer. For more information about microgreens please visit our about section.
                </p>
                <Link to='/about'>About</Link>
            </Article> */}
            <Gallery>
                <figure>
                        <figcaption>
                            <h3>Beets</h3>
                            <p>Harvest time: 10 - 16 days <br></br> Taste: Earthy Flavor</p>
                        </figcaption>
                        <img src={beets1} alt="beets microgreens"/>
                        
                </figure>
                <figure>
                        <figcaption>
                            <h3>Broccoli</h3>
                            <p>Harvest time: 7 - 10 days <br></br> Taste: Broccoli Flavor</p>
                        </figcaption>
                        <img src={broccoli3} alt="broccoli microgreens"/>
                </figure>
                <figure>
                        <figcaption>
                            <h3>Carrots</h3>
                            <p>Harvest time: 10 - 16 days <br></br> Taste: Carrot Flavor</p>
                        </figcaption>
                        <img src={carrot1} alt="carrot microgreens"/>
                </figure>
                <figure>
                        <figcaption>
                            <h3>Dill</h3>
                            <p>Harvest time: 10 - 16 days <br></br> Taste: Dill Flavor</p>
                        </figcaption>
                        <img src={dill1} alt="dill microgreens"/>
                </figure>
                <figure>
                        <figcaption>
                            <h3>Kohlrabi</h3>
                            <p>Harvest time: 7 - 10 days <br></br> Taste: Cabbage Flavor</p>
                        </figcaption>
                        <img src={kohlrabi3} alt="kohlrabi microgreens"/>
                </figure>
                <figure>
                        <figcaption>
                            <h3>Peashoots</h3>
                            <p>Harvest time: 7 - 10 days <br></br> Taste: Pea Flavor</p>
                        </figcaption>
                        <img src={peashoot2} alt="peashoots microgreens"/>
                </figure>
            </Gallery>
            <span id="bottom"></span>
       </HomePage>
    )
}

export default Home;