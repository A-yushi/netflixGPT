import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/createUser';
import { LOGO } from '../utils/constants';

const Header = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((store)=>store.user)

  const handleSignOut = ()=>{signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) { 
       // User is signed in, see docs for a list of available properties
       // https://firebase.google.com/docs/reference/js/auth.user

         const {uuid,email,displayName,photoURL}= user;
         dispatch(addUser({uuid,email,displayName,photoURL}));
         navigate("/browse");

        // ...
      } 
      else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return ()=> unsubscribe();
  },[])
  

  return (
    <div className='absolute bg-gradient-to-b from-black z-20 w-screen flex justify-between' >
        <div className='w-40 mx-9'>
            <img src={LOGO}/>
        </div>
        {user && 
        <div className='flex'>
          
          <div>
            <img alt="userImg" className='w-24 h-24 rounded-full p-2' 
            src={user.photoURL}
            />
            {/* <p>{user.displayName}</p> */}
          </div>

          <button onClick={handleSignOut} className= 'bg-red-500 text-white px-2 rounded-lg h-9 mt-7 mr-4'>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header