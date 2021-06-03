import React, { useState , useEffect } from 'react'
import * as Yup from 'yup'
import styled from 'styled-components'
import FormSchema from '../validation/FormSchema'



const ContactForm = styled.section`
width:90%;
margin: 2rem auto;
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
@media only screen and (min-width: 768px) {
  width:70%;
  }
  @media only screen and (min-width: 1024px) {
    width: 45%;

`


const Contact = () => {
const initialForm = {name: '' , email: '', message:''}
const initialFormErrors = {name:'', email:'', message:''  }
const [formData , setFormData] = useState(initialForm)
const [ formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled , setDisabled] = useState(true)

const onChange = (e) => {
    const { name , value } = e.target
    Yup.reach(FormSchema , name)
    .validate(value)
    .then(() => setFormErrors({...formErrors , [name]: ''}))
    .catch( err => setFormErrors({...formErrors, [name]: err.errors[0]}))
    setFormData({ [name]: value })
}

useEffect(()=> {
    FormSchema.isValid(formData)
    .then(isValid => setDisabled(!isValid))
    .catch( err => console.log(err))
  },[formData])

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
    setFormData(initialForm)
  };

    return(
        <ContactForm>
            <h2>Questions?</h2>
            <form onSubmit={handleSubmit} name="contact" netlify-honeypot="bot-field" data-netlify="true" hidden>
                <input type="hidden" name="form-name" value="contact" />
                <div>{formErrors.name}</div>
                <label>Name
                    <input
                    name='name'
                    type='text'
                    placeholder='Name'
                    onChange={onChange}
                    />
                </label>
                <div>{formErrors.email}</div>
                <label>Email
                    <input
                    name='email'
                    type='email'
                    placeholder='Email@business.com'
                    onChange={onChange}
                    />
                </label>
                <div>{formErrors.message}</div>
                <label>Message
                    <textarea
                    name='message'
                    type='email'
                    onChange={onChange}></textarea>
                </label>
                <button disabled={disabled}>Submit</button>
            </form>
        </ContactForm>
    )
}

export default Contact