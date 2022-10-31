import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const Form = () => {

    const [name,setName] = useState('')
    const [errors,setErrors] = useState({})
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/addAuthor',{
            name: name
        }).then((res) => {
            console.log(res)
            navigate('/')
        }).catch((err) => {
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }

    return (
        <form className='col-5 mx-auto p-4' onSubmit={submitHandler}>
            <label><strong>New Author Name</strong></label>
            <input className='form-control my-2' type="text" onChange={(e) => setName(e.target.value)} value={name}/>
            <p className='text-danger'>{errors?.name?.message}</p>

            <button className='btn btn-primary my-2' type="submit">Create Author</button>
            <Link to="/" className='btn btn-secondary ms-2'>Cancel</Link>
        </form>
    )
}

export default Form