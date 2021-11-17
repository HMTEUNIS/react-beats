import React, { useContext, memo } from 'react'
import { Context } from '../hooks/useStore'
import { soundFiles } from '../constants/config'
import Track from './Track'
import { context } from 'tone'

const TrackList = ({ currentStepID, selected, fetched }) => {
    const { sequence: { trackList, noteCount } } = useContext(Context)


    console.log('selected', selected)
    const toSave = trackList.map( track => {
        
        const soundSave = {
            name : track.soundFile,
            notes: track.onNotes
        } 
    return    soundSave
    })
    function saveIt (e) {
          
             

        let newBeat ={ 
        trackListInfo : [
            {
                "name": toSave[0].name,
                "notes": toSave[0].notes
            },
            {
                "name": toSave[1].name,
                "notes": toSave[1].notes
            },
            {
                "name": toSave[2].name,
                "notes": toSave[3].notes
            },
            {
                "name": toSave[3].name,
                "notes": toSave[3].notes
            }
           
        ]  }

        fetch('http://localhost:4000/beats', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBeat),
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    }
// use an if statement to say that if selected > 0 onNotes is the array in the id'd array
       const gettin = fetched[selected-1]
    const content = trackList.map((track, trackID) => {
        let { title, onNotes, soundFile } = track
        const soundFilePath = soundFiles[soundFile]
            console.log(fetched)
        
        console.log("find", gettin.trackListInfo)
           
        //

            
    
       
        return (
         <>
         
            <Track
            
                key={title}
                trackID={+trackID}
                currentStepID={currentStepID}
                title={title}
                noteCount={noteCount}
                onNotes={onNotes}
                soundFilePath={soundFilePath}
            />
            
           
            
            </>
        )
    })
    
     

    return (
        <>
        
      
        <div className="track-list">
            {content}
            
        </div>
        <button onClick={(e) => saveIt()} > SAVE BEAT </ button>
        
        </>
    )
}

export default memo(TrackList)

