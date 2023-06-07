import {createContext, useEffect, useState} from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth"
import app from '../Firebase/Firebase.config';


export const FirebaseAuthContext = createContext()
const auth = getAuth(app)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
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
        setLoading(true)
        return updateProfile(auth.currentUser,{displayName:name,photoURL:photurl})
    }

    //manage the auth state change
    useEffect(() =>{
        const unsubscribe = () => onAuthStateChanged(auth,currentUser => {
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser)
        })
    
        return () =>{
            unsubscribe()
        }
    } ,[])

    const authInfo = {
     updateUserProfile,
      registerUser,
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