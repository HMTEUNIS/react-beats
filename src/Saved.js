import React from 'react'

const Saved = ({fetched, setSelected}) => {
    const displayBeats = fetched.map (beat => <span className="span" onClick={() => setSelected(beat.id-1)} >Beat {beat.id}</span>)

    return (
        <div>
            {displayBeats}
        </div>
    )
}
        

export default Saved
