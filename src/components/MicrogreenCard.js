import React from 'react'
import styled from 'styled-components'


const Microgreens = styled.article`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:1.5rem;
    p{
        line-height:0.05;
    }
    img{
        width:60%;
        height:auto;
        border-radius: 10%;
  
    }

`


const MicrogreenCard = (props) => {
    const {title, harvest, flavor , img_url} = props.image
  
    return (

        <Microgreens className = {props.className} >
            <h2>{title}</h2>
            <img src={img_url}></img>
            <p>{harvest}</p>
            <p>{flavor}</p>
        </Microgreens>
    )
}

export default MicrogreenCard