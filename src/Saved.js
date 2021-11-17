import React from 'react'

const Saved = ({fetched, setSelected}) => {
    
    return (
        <div>
        {fetched.map (beat => <span className="span" onClick={() => setSelected(beat.id-1)} >Beat {beat.id}</span>)}
        </div>
    )
}
        

export default Saved
