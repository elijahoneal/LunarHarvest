import React from 'react'
import styled from 'styled-components'
import Gallery from '../components/Gallery'
// images
import garden from '../images/vertical-garden-1.jpg'
import garden2 from '../images/vertical-garden-2.jpg'
import garden3 from '../images/vertical-garden-3.jpg'
import cucumber from '../images/cucumber-1.jpg'

const HomePage = styled.section`

width: 90%;
margin: auto;

h1{

    font-size:2rem;
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

`

const Article = styled.article`
text-align:left;
p{
    text-decoration:none;
    color: #3D291B;
    border:none;
    img{
        width:10%;
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
           <Gallery/>
          
       </HomePage>
    )
}

export default Home;