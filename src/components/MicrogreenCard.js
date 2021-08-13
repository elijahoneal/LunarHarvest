import React from 'react'
import styled from 'styled-components'


const Microgreens = styled.article`
    display:flex;
    flex-direction:column;
    align-items:center;

    img{
        width:90%;
        height:auto;
        border-radius: 50%;
  
    }

`


const MicrogreenCard = (props) => {
    const {id , img_url} = props.image
  
    return (

        <Microgreens className = {props.className} >
            <p>{id}</p>
            <img src={img_url}></img>
        </Microgreens>
    )
}

export default MicrogreenCard