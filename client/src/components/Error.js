import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {

    return (
        <div className='container col-6 mt-3 bg-dark p-4 rounded'>
            <h3 className='text-white'>We're sorry, but we could not find the author you are looking for. Would you like to add an author to our database?</h3>
            <Link to={'/form'} className="btn btn-primary mt-2">Create an Author</Link>
        </div>
    )
}

export default Error