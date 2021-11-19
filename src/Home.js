import React from 'react'
import "./Home.css"
import {Link} from "react-router-dom"
// import skel from "skel.gif"

const Home = () => {
    return (
        <div className="homeDiv">
            <p className='homeHead'>Welcome To React Beats</p>
           <Link to= '/tutorial'> <span className="span"><button className="hsbutt" Link to="/tutorial">Tutorial</button></span></ Link>
            <Link to= '/app'> <span className="span"><button className="hsbutt">Application</button></span></ Link>
            <br />
            <p2>Special Thanks to Joe Seifi and Ganesh Mani. We've never met, but your work was so influencial and helpful in ours we couldn't not name you. </p2>
            <br />
            <img src="https://i.pinimg.com/originals/0e/4d/60/0e4d6062d1bd7d7a077739f68be05ccd.gif" />
        </div>
    )
}
export default Home