import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
    const [isSignIn,setIsSignIn] = useState(true);

    const toggleSignInForm = () =>{
        setIsSignIn(!isSignIn);
    }

  return (
    <div className=''>
        <Header/>
        
        <div className='absolute '>
            <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg"/>
        </div>
        <form className='absolute opacity-90  bg-black w-3/12 p-12 my-28 mx-auto left-0 right-0   text-white rounded-md'>
            <h1 className='text-2xl font-bold my-3'>
                {isSignIn?"Sign In":"Sign Up"}
            </h1>
            {!isSignIn &&
            (<input className='my-3 p-2 w-full rounded-md bg-gray-600'
             type="text" placeholder='Full Name'/>)}
            <input className='my-3 p-2 w-full rounded-md bg-gray-600' type="text" placeholder='Email'/>
            <input className='my-3 p-2 w-full rounded-md bg-gray-600' type="password" placeholder='Password'/>
            <button className='my-3 p-2 w-full rounded-md bg-red-600' type="submit">Sign In</button>
            <p onClick={toggleSignInForm} className='mx-3'>
                {isSignIn?"New to Netflix? Sign up now.":"Already registed, Sign In now."}
            </p>
       
        </form>
    
        

    </div>
    
  )
}
export default Login;
