import React from 'react'
import "./Home.css"
import {Link} from "react-router-dom"

const Home = () => {
    return (
        <div className="homeDiv">
            <p className='homeHead'>Welcome To React Beats</p>
           <Link to= '/tutorial'> <span className="span"><button className="hsbutt" Link to="/tutorial">Tutorial</button></span></ Link>
            <Link to= '/app'> <span className="span"><button className="hsbutt">Application</button></span></ Link>
            <br />
            <p2>Special Thanks to Joe Seifi and Ganesh Mani. We've never met, but your work was so influencial and helpful in ours we couldn't not name you. </p2>
            
        </div>
    )
}
export default Home