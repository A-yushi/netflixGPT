import React, { useState ,useRef} from 'react'
import Header from './Header';
import validate from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/createUser';
import { BG_IMG} from '../utils/constants'

const Login = () => {
    const [isSignIn,setIsSignIn] = useState(true);

    const [errMsg,setErrMsg] = useState(null);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const email = useRef(null);
    const password = useRef(null);
    const displayName = useRef(null);

    const toggleSignInForm = () =>{
        setIsSignIn(!isSignIn);
    }

    const handleButtonClick = () =>{
        const errorMsg = validate(email.current.value,password.current.value);
        setErrMsg(errorMsg);

        if(errorMsg)return;

        if(!isSignIn){
            //sign up logic
            createUserWithEmailAndPassword(
                auth,
                email.current.value, 
                password.current.value
            )
            .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;

            updateProfile(user, {
                displayName: displayName.current.value, 
                photoURL: "data:image/jpeg;base64,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"
              }).then(() => {
                // Profile updated!
                const {uuid,email,displayName,photoURL}= auth.currentUser;
          
                dispatch(addUser({uuid,email,displayName,photoURL}));
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });

            // ...
            })
           .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrMsg(errorCode+" "+errorMessage);
            // ..
            }
            );
        }
        else{
            //sign in logic
            signInWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value
            )
            .then((userCredential) => {
            // Signed in            
            const user = userCredential.user;
            // ...
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrMsg(errorCode+" "+errorMessage)
            });
        }
        
    }

    

  return (
    <div className=''>
        <Header/>
        
        <div className='absolute '>
            <img  src={BG_IMG}/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='absolute opacity-90  bg-black w-3/12 p-12 my-28 mx-auto left-0 right-0   text-white rounded-md'>
            <h1 className='text-2xl font-bold my-3'>
                {isSignIn?"Sign In":"Sign Up"}
            </h1>
            {!isSignIn &&
            (<input ref={displayName} className='my-3 p-2 w-full rounded-md bg-gray-600'
             type="text" placeholder='Full Name'/>)}

            <input ref={email} className='my-3 p-2 w-full rounded-md bg-gray-600' 
            type="text" placeholder='Email'/>

            <input ref={password} className='my-3 p-2 w-full rounded-md bg-gray-600' 
            type="password" placeholder='Password'/>

            <p className='text-red-600'>{errMsg}</p>

            <button onClick={handleButtonClick} className='my-3 p-2 w-full rounded-md bg-red-600' 
    type="submit">{isSignIn?"Sign In":"Sign Up"}</button>

            <p onClick={toggleSignInForm} className='mx-3 cursor-pointer'>
                {isSignIn?"New to Netflix? Sign up now.":"Already registed, Sign In now."}
            </p>
       
        </form>
    </div>
    
  )
}
export default Login;
