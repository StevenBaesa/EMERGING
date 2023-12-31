import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Validation from './SignupValidation'

function Signup () {
    const [values, setValues] = useState({
        name:'',
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState ({})
    const handleInput =(event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(Validation(values));
    }


    return(
    <div  className='d-flex justify-content-center align-items-center bg-black vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Sign-Up</h2>
         <form action ="" onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor="name"><strong>Name</strong></label>
                <input type="text" placeholder='Enter Full Name' name='name'
                onChange={handleInput} className='form-control rounded-0'/>
                {errors.name && <span className='text-danger'>{errors.email}</span>}
            </div>
            <div className='mb-3'>
                <label htmlFor="email"><strong>Email</strong></label>
                <input type="email" placeholder='Enter Email' email = 'email'
                 onChange={handleInput}className='form-control rounded-0'/>
                 {errors.email && <span className='text-danger'>{errors.email}</span>}
            </div>
            <div className='mb-3'>
                <label htmlFor="address"><strong>Address</strong></label>
                <input type="address" placeholder='Enter Address' address ='address'
                 onChange={handleInput} className='form-control rounded-0'/>
                 {errors.address && <span className='text-danger'>{errors.address}</span>}
            </div>
            <div className='mb-3'>
                <label htmlFor="password"><strong>Password</strong></label>
                <input type="password" placeholder='Enter Password' password ='password'
                 onChange={handleInput}className='form-control rounded-0'/>
                 {errors.password && <span className='text-danger'>{errors.password}</span>}
            </div>
            <div className='mb-3'>
                <label htmlFor="SQ"><strong>Secret Question</strong></label>
                <input type="SQ" placeholder='Enter Secret Question' question ='question'
                 onChange={handleInput}className='form-control rounded-0'/>
                 {errors.question && <span className='text-danger'>{errors.email}</span>}
            </div>
            <button className='btn btn-success w-100'><strong>Sign up</strong></button>
            <p></p>
            <Link to='/' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>  Log in </Link>
         </form>
        </div>
    </div>
    )

}
export default Signup
