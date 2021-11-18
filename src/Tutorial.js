import React from 'react'
import "./Tutorial.css"
import {Link} from "react-router-dom"

const Tutorial = () => {
    return (
        <div className="tut">
         <p3>How does it work?</p3>
         <br />
         <p2>Feel free to try and get this thing to work any way you want it to work. You can't load it as a plugin to your favorite daw, but you can record it a la your headphone jack! Last night I plugged it into a line of pedals and had a great time. Think of it more like hardware than software.
            </p2> <br />
            <p4>If you look at the above .gif you can get the general flow.</p4><br /><p4> A note from us, the developers: it's best to change the beat while the clock is rolling.</p4>
            <br />
             <p2> That being said, Hack it to shit and and do whatever you want. Send us the repo (if you want) we're happy to have done some of the work for you.</p2>
       <br /> <Link to= '/app'> <button className="apbtn"  >Lets go!</button></ Link>
        </div>
    )
}

export default Tutorial
