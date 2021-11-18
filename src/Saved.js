import React from 'react'
import './Saved.css'

const Saved = ({fetched, setSelected}) => {
    
    const displayBeats = fetched.map (beat =>  <button className="span"  onClick={() => setSelected(beat.id-1)} >Beat {beat.id}</button>)

    return (
        <div>
            {displayBeats}
        </div>
    )
}
        

export default Saved
