import {createContext, useEffect, useState} from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import app from '../Firebase/Firebase.config';
// import { postRequest } from '../utils/CRUD';
import axios from 'axios';


export const FirebaseAuthContext = createContext()
const auth = getAuth(app)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider()
     const [user,setUser] = useState(null);
     const [loading,setLoading] = useState(true)

     
     // singup a user on the firebase
     const registerUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
     }

     // login using firebase
     const logIn = (email,password) => {
       setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
     }
     
     //logout a user
     const logOut = () => {
        setLoading(true)
        return signOut(auth)
     }
    // update user profile on firebase
    const updateUserProfile = (name,photurl) =>{
        return updateProfile(auth.currentUser,{displayName:name,photoURL:photurl})
    }

    //login with google 
    const logInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    //manage the auth state change
    useEffect(() =>{
        const unsubscribe = () => onAuthStateChanged(auth,currentUser => {
            setUser(currentUser)
            console.log(currentUser)
            if(currentUser){
                axios.post('https://sportifycamp.vercel.app/jwt', {email: currentUser.email})
                .then(data =>{
                    console.log(data.data)
                    localStorage.setItem('token', data.data)
                    setLoading(false);
                })
            }
            else{
                localStorage.removeItem('token')
            }
            setLoading(false) 
        })
        return () =>{
            unsubscribe()
        }
    } ,[])

    const authInfo = {
     updateUserProfile,
      registerUser,
      logInWithGoogle,
      logIn,
      logOut,
      user,
      loading
    }
    return (
        <FirebaseAuthContext.Provider value={authInfo}>
            {children}
        </FirebaseAuthContext.Provider>
    );
};

export default AuthProvider;