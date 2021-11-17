import React from 'react'
import Span from './Span'

const Saved = ({fetched, setSelected}) => {
    
    return (
        <div>
        {fetched.map (beat => <span className="span" onClick={() => setSelected(beat.id)} >Beat {beat.id}</span>)}
        </div>
    )
}
        

export default Saved
