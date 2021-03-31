import * as Yup from 'yup'


const FormSchema = Yup.object().shape({
    name: Yup  
    .string()
    .required("Name is Required"),
    email: Yup
    .string()
    .email("Must be valid email address")
    .required("Email is Required"),
    message: Yup
    .string()
    .required("Please enter a message")
})

export default FormSchema