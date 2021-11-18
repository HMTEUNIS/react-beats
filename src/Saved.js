import React from 'react'
import './Saved.css'
const Saved = ({fetched, setSelected, selected, re, setre}) => {
    
    const displayBeats = fetched.map (beat =>  <button className="span" id={beat.id} onClick={() => setSelected(beat.id)} >Beat {beat.id}</button>)
    return (
        <div>
            {displayBeats}
            
        </div>
    )
}
        
export default Saved