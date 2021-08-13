import React, {useEffect , useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import MicrogreenCard from './MicrogreenCard'
import Slider from 'react-slick'
import {IoIosArrowDropleftCircle , IoIosArrowDroprightCircle} from 'react-icons/io'

const Arrow = styled.div`
width: 10%;
position: absolute:
cursor: pointer;
z-index: 10;
font-size: 1.5rem;
color: #3D291B;
`

const Gallery = () => {
    const empGallery = []
    const [gallery , setGallery] = useState(empGallery)
    const [imgIdx , setImgIdx] = useState(0)

    useEffect( () => {
        axios.get('https://lunarharvestgallery.herokuapp.com/')
        .then( res => setGallery(res.data) )
        .catch( err => console.log('error' , err))
    },[] )
    console.log(gallery)

    const NextArrow = ({onClick}) => {
        return (
            <Arrow onClick={onClick}>
                <IoIosArrowDroprightCircle className ="rightArr"/>
            </Arrow>
        )
    }
    const PrevArrow = ({onClick}) => {
        return (
            <Arrow onClick={onClick}>
                <IoIosArrowDropleftCircle />
            </Arrow>
        )
    }
    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding:0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImgIdx(next)
    }
  
    return (

            <Slider {...settings}>
                {  gallery.map( (image , idx) => {
              
            return (
                <MicrogreenCard className = { idx == imgIdx ? "slide activeSlide" : "slide" } image = {image} key = {image.id} />
            )
                
                } )}
            </Slider>

      
    )
}

export default Gallery