import React, { useContext, memo, useState } from 'react'
import { Context } from '../hooks/useStore'
import { soundFiles } from '../constants/config'
import Track from './Track'
import { context } from 'tone'

const TrackList = ({ currentStepID, selected, fetched, re, setre }) => {
    const { sequence: { trackList, noteCount } } = useContext(Context)
  
    const [soundFileSelection,setSoundFileSelection] = useState({
        'Kick': trackList[0].soundFile,
        'Snare': trackList[1].soundFile,
        'Open Hat': trackList[2].soundFile,
        'Closed Hat': trackList[3].soundFile,
        // 'cymbal': trackList[4].soundFile
    })
    const handleSoundSelection = (e) => {
        setSoundFileSelection({...soundFileSelection, [e.target.id]:e.target.value})
    }

    let toSave = trackList.map( track => {
       
        const soundSave = {
            name : track.soundFile,
            notes: track.onNotes
        } 
    return    soundSave
    })
    console.log(selected)
    console.log('re',re)
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
                "notes": toSave[2].notes
            },
            {
                "name": toSave[3].name,
                "notes": toSave[3].notes
            }
           
        ]  }
        

   console.log(newBeat)

          fetch(`http://localhost:4000/beats/${selected+1}`, {
  method: 'PATCH', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newBeat),
})
.then(res => res.json())
.then(data => {
  setre(!re);
})
.catch((error) => {
  console.error('Error:', error);
});
    }

    function del (e) {
          

        let newBeat ={ 
        trackListInfo : [
            {
                "name": toSave[0].name,
                "notes": []
            },
            {
                "name": toSave[1].name,
                "notes": []
            },
            {
                "name": toSave[2].name,
                "notes": []
            },
            {
                "name": toSave[3].name,
                "notes": []
            }
           
        ]  }
        

   console.log(newBeat)

          fetch(`http://localhost:4000/beats/${selected+1}`, {
  method: 'PATCH', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newBeat),
})
.then(res => res.json())
.then(data => {
  setre(!re);
})
.catch((error) => {
  console.error('Error:', error);
});
    }
    
    
const gettin = fetched[selected]

let loadKicks = gettin.trackListInfo[0].notes
let loadSnares = gettin.trackListInfo[1].notes
let loadHho = gettin.trackListInfo[2].notes
let loadHhc = gettin.trackListInfo[3].notes

const savedTrackSounds = {
    kickTrack : gettin.trackListInfo[0].name,
    snareTrack : gettin.trackListInfo[1].name,
    ohhTrack : gettin.trackListInfo[2].name,
    chhTrack : gettin.trackListInfo[3].name
}

function loadin (e){
    trackList[0].onNotes = []
    trackList[1].onNotes = []
    trackList[2].onNotes = []
    trackList[3].onNotes = []
    trackList[0].onNotes = loadKicks
    trackList[1].onNotes = loadSnares
    trackList[2].onNotes = loadHho
    trackList[3].onNotes = loadHhc

    trackList[0].name = savedTrackSounds.kickTrack
    trackList[1].name = savedTrackSounds.snareTrack
    trackList[2].name = savedTrackSounds.ohhTrack
    trackList[3].name = savedTrackSounds.chhTrack
}

    const tempTrackList = [...trackList]
        tempTrackList.map((track)=>{
            const title = track.title
            track.soundFile = soundFileSelection[title]
        })

    let content = trackList.map((track, trackID) => {
        let key = trackID
        let { title, onNotes, soundFile, id } = track
        let soundFilePath = soundFiles[soundFile]
        return (
        <> 

            <Track
            
                id = {id}
                key={title}
                trackID={+trackID}
                currentStepID={currentStepID}
                title={title}
                noteCount={noteCount}
                onNotes={onNotes}
                soundFilePath={soundFilePath}
                handleSoundSelection={handleSoundSelection}
            />
            </>
        )
    })
    
    return (
        <>
        
        <div className="track-list">
        
            {content}
        </div>
        <button className="tlButtons" onClick={(e) => saveIt()} > SAVE TO SELECTED </ button>
        <button className="tlButtons"  onClick={(e) => loadin()} > LOAD SELECTED BEAT </ button>
        <br />
            <button className="tlButtons" onClick={(e) => del()}>CLEAR SELECTED</button>
        <p1> Beat {selected} Selected!</p1>
       
       
        </>
    )
}
export default memo(TrackList)