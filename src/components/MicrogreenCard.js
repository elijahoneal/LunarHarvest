import React from 'react'
import styled from 'styled-components'


const Microgreens = styled.article`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:1.5rem;
    img{
        width:50%;
        height:auto;
        border-radius: 10%;
  
    }

`


const MicrogreenCard = (props) => {
    const {title, details , img_url} = props.image
  
    return (

        <Microgreens className = {props.className} >
            <h2>{title}</h2>
            <img src={img_url}></img>
            <p>{details}</p>
        </Microgreens>
    )
}

export default MicrogreenCard