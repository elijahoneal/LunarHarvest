import React from 'react'
import styled from 'styled-components'
import Gallery from '../components/Gallery'
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
const Feature = styled.article`
display:flex;
color: #3D291B;
border-radius: 10px;
padding: 1rem;
background-color: #F4E08E;
font-size:1.3rem;
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
            <h1>Latest News</h1>
            <Feature>
                <p>
                    Lunar Harvest will be attending the Orange Park Farmer's Market starting September 5th! We will have cut to order microgreens and live 10in x 10in trays availabl for purchase.
                </p>
           
             
            </Feature>
            <Article>
                <h2>Thank you for visiting!</h2>
                <p>
                So you may be asking right now "What are microgreens?" Microgreens are vegetables and herbs that are intentionally harvested before reaching full maturity. They are older than sprouts and provide the most nutrients a few weeks after sprouting from the seeds.
                </p>
                <p>
                    Below are are a few of the microgreens that I currently offer. For more information about microgreens please visit our about section.
                </p>
            </Article>
           <Gallery/>
          
       </HomePage>
    )
}

export default Home;