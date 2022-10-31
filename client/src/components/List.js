import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const List = () => {

    const [list,setList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/allAuthors')
        .then((res) => {
            console.log(res)
            setList(res.data)
        }).catch((err) => {
            console.log(err)
        })
    },[])

    //Deleted a specific item given an id.
    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/delete/${id}`)
        .then((res) => {
            console.log('Delete was successfull')
        }).catch((err) => {
            console.log(err)
        })
    }

    //DOM manipulator function that removes deleted items from the page
    const removeFromDom = (id) => {
        setList(list.filter(author => author._id != id))
    }

  return (
    <div>
        <table className='table'>
            <thead>
                <tr className='bg-light'>
                    <th>Authors</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((author,index) => (
                        <tr key={index}>
                            <td>{ author.name }</td>
                            <td>
                                <Link to={`/edit/${author._id}`} className='btn btn-primary py-1'>Edit</Link>
                                <button className='btn btn-danger ms-2 py-1' onClick={(e) => {
                                    deleteHandler(author._id)
                                    removeFromDom(author._id)
                                }}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <Link to="/form" className='btn btn-secondary'>Add New Author</Link>
    </div>
  )
}

export default List