import React, {useEffect , useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import MicrogreenCard from './MicrogreenCard'
const Microgreens = styled.section`
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
        width:10%;
        height:auto;
        border-radius: 50%;
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

const Gallery = () => {
    const empGallery = []
    const [gallery , setGallery] = useState(empGallery)
    useEffect( () => {
        axios.get('https://lunarharvestgallery.herokuapp.com/')
        .then( res => setGallery(res.data) )
        .catch( err => console.log('error' , err))
    },[] )
    console.log(gallery)
  
    return (
        <Microgreens>
      {  gallery.map( image => {
          return (
            <MicrogreenCard image = {image} key = {image.id} />
          )
            
        } )}
        </Microgreens>
   
       
  
    )
}

export default Gallery