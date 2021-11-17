import React from 'react'

const Saved = ({fetched, setSelected}) => {
    
    return (
        <div>
        {fetched.map (beat => <span className="span" onClick={() => setSelected(beat.id)} >Beat {beat.id}</span>)}
        </div>
    )
}
        

export default Saved
