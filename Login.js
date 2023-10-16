import React from 'react'
import { Link } from 'react-router-dom'


function Login() {
    return (
        <div className='d-flex justify-content-center align-items-center bg-black vh-100'>
            <div className='bg-white p-3 rounded w-25'>
             <form action ="">
                <div className='mb-3'>
                   <div style={{fontFamily:'roboto'}}><label htmlFor="email"><strong>Email</strong></label></div>
                    <input type="email" placeholder='Enter Email' className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                  <div style= {{fontFamily: 'roboto'}}><label htmlFor="password"><strong>Password</strong></label></div>
                    <input type="password" placeholder='Enter Password'className='form-control rounded-0'/>
                </div>
                <div style = {{fontFamily: 'roboto'}}><button className='btn btn-success w-100'>
                    <strong>Login</strong></button></div>
                <div style={{ display: 'flex',justifyContent: 'flex-end',fontFamily: 'roboto'}}>
                <button className='btn btn' style={{fontSize:13}}>Forgot Password?</button></div>
                <Link to='/signup' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'> Create Account </Link>
             </form>
            </div>
        </div>
    )
}

export default Login