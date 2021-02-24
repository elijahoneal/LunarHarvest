import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'




const ContactForm = styled.section`
width:90%;
margin: auto;
form{
    display:flex;
    flex-direction:column;
    background-color:#F4E08E;
    font-size:1.3rem;
    label{
        display:flex;
        width:90%;
        margin: 0.5rem auto;
        align-items:center;
        justify-content:space-between;
        color: #7D5118;
    }
    input , textarea{
        width:80%;
        border: none;
    }
    textarea{
        height: 5rem;
    }
    button{
        width:50%;
        margin: 0.5rem auto;
        border: 0.1rem solid #7D5118;
        padding: 0.1rem 0.3rem;
        font-size: 1.3rem;
        background-color:#fff;
        &:hover{
            background-color: #7D5118;
            color: #fff;
        }
    }
}
`


const Contact = () => {
const initialForm = {name: '' , email: '', message:''}
const [formData , setFormData] = useState(initialForm)

const onChange = (e) =>{
    setFormData({ [e.target.name]: e.target.value })
}
const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

const postEmail = form => {
    axios("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...form })
    })
    .then(() => alert("Success!"))
    .catch(error => alert(error));
}

const onSubmit = (e) => {
    e.preventDefault()
    postEmail(formData)
    setFormData(initialForm)
}
    return(
        <ContactForm>
            <h2>Questions?</h2>
            <h3></h3>
            <form onSubmit={onSubmit}>
                <label>Name
                    <input
                    name='name'
                    type='text'
                    placeholder='Name'
                    onChange={onChange}
                    />
                </label>
                <label>Email
                    <input
                    name='email'
                    type='email'
                    placeholder='Email@business.com'
                    onChange={onChange}
                    />
                </label>
                <label>Message
                    <textarea
                    name='message'
                    type='email'
                    onChange={onChange}
                    />
                </label>
                <button>Submit</button>
            </form>
        </ContactForm>
    )
}

export default Contact