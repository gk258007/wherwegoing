import { SignInButton } from "@clerk/nextjs"
import bg from '../../public/somethingpriv.jpg'

export default function Public(){
    return(
        <div style={{
            backgroundImage: `url(${bg.src})`,
            width: '100%',
            height: '100vh', // Set height to 100% of the viewport height
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", // Make the background image cover the entire container
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }} >
        <h1 style={{'textAlign':'center'}}>OMG this is not your place</h1>
            <SignInButton />
        </div>
  
        
    )
}