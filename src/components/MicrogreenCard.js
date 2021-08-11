import React from 'react'



const MicrogreenCard = (props) => {
    const {id , img_url} = props.image
    return (

        <article>
            <p>{id}</p>
            <img src={img_url}></img>
        </article>
    )
}

export default MicrogreenCard