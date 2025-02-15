import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { auth } from "../javascript/firebase_init__"
import { use, useState } from "react"
 
 
 function Login() {
const [user,setUser]= useState(null)
    const provider = new GoogleAuthProvider()
    const handleGoogleSinIn=()=>{
 signInWithPopup(auth,provider)
 .then (result=>{
    console.log(result);
    setUser(result.user)
 }).catch(error=>{
console.log('error',error);
setUser(null)
 })
    }

const handleSignOut = ()=>{
    signOut (auth)
    .then(()=>{
        setUser(null)
    }).catch ( error=>{
        console.log('error',error);
})
}
    return (
        <div>

         {  user?
                
          <button onClick={handleSignOut}>sign out</button>:
           

          <button onClick={handleGoogleSinIn}>log in</button>
           }
        {
    user && <div>
        <h3>usename :{user.displayName}</h3>
        <h3>useremail {user.email }</h3>
    </div>
    }
        </div>
    )
 }
 
 export default Login
 
