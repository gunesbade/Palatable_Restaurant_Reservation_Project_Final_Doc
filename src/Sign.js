import { Link } from "react-router-dom";
import Navbar from './Navbar';
import React, {useState} from 'react';
import Validation from './Signvalidation';


function Sign() {
    const [values, setValues] = useState({
        email:'',
        password:''
    })
    const [errors, setErrors] = useState({})
    const handleInput =(event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(Validation(values));
    }
  return (
    <div>
        <Navbar></Navbar>

        <section class="info-details" id="info-details">
    <div class="title">
        <img src="./images/blue%20wave.png" alt="" />
        <p>SIGN IN</p>
        <img src="./images/blue%20wave.png" alt="" />
    </div>
    <p class="sub-title">
        Log in to your account
    </p>
    <form action="/" onSubmit={handleSubmit}>
        <div class="input">
            <p>Email Address</p>
            <input type="email" id="email" placeholder="Enter your email address..." name='email'
            onChange={handleInput} className='input' />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
        </div>
        <div class="input">
            <p>Password</p>
            <input type="password" id="password" placeholder="Enter your password..." name='password'
            onChange={handleInput} className='input' />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
        </div>
        
        <button class="btn" type="submit"><li><Link to="/">Sign In</Link></li></button>
    </form>

</section>
    </div>
  )
}

export default Sign;