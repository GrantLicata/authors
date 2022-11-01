import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'

const Edit = () => {
    
    const [name,setName] = useState('')
    const [errors,setErrors] = useState({})
    const navigate = useNavigate()
    const { id } = useParams()

    //Some logic in the use effect should be used to send a message if the id is not found in the database
    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then((res) => {
            setName(res.data.name)
        }).catch((err) => {
            navigate('/error')
            console.log(err)
        })
    },[])

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/update/${id}`,{
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
            <label><strong>Edit Author Name</strong></label>
            <input className='form-control my-2' type="text" onChange={(e) => setName(e.target.value)} value={name}/>
            <p className='text-danger'>{errors?.name?.message}</p>

            <button className='btn btn-primary my-2' type="submit">Edit Author</button>
            <Link to="/" className='btn btn-secondary ms-2'>Cancel</Link>
        </form>
    )
}

export default Edit