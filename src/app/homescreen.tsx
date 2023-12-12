import { SignOutButton } from "@clerk/nextjs";
import bg from '../../public/A.jpeg';
import { createClient} from '@supabase/supabase-js'
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";




export default function Private() {
const [chunk,setChunk] = useState<any | null>(null);
const [budget,setBudget] = useState<any | null>(null);

  const getData_budg = async ()=>{
    let { data: places, error} = await supabase
    .from('whereshallwego')
    .select()
    .eq('budget','TRUE')
    if (places) {
        setChunk(places)
        console.log(places)
    }
    if (error) console.log(error)
   } 
   const getData = async ()=>{
    let { data: places, error} = await supabase
.from('whereshallwego')
.select()
.eq('budget','FALSE')
if (places) {
    setChunk(places)
    console.log()
}
}
const fetchPlaces = async ()=>{
    if(budget){
        getData_budg()
    }else{
        getData()
    }
}


 
    return (
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
           
        }}>
            <h1>Home: {chunk[0].place}</h1>
            {/* <Switch onSelect={()=>console.log("selected")} aria-label="Automatic updates"/> */}
            <button onClick={getData_budg}>CLICK ME</button>
            
            <SignOutButton />
        </div>
    );
}
