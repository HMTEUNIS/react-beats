import React, { useContext, memo, useState } from 'react'
import { Context } from '../hooks/useStore'
import { soundFiles } from '../constants/config'
import Track from './Track'
import { context } from 'tone'

const TrackList = ({ currentStepID, selected, fetched }) => {
    const { sequence: { trackList, noteCount } } = useContext(Context)


    const [notes, setNotes] = useState([])

    console.log('selected', selected)
    const toSave = trackList.map(track => {

        const soundSave = {
            name: track.soundFile,
            notes: track.onNotes
        }
        return soundSave
    })
    function saveIt(e) {



        let newBeat = {
            trackListInfo: [
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

            ]
        }

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
    const gettin = fetched[selected]

    let loadedNotes = gettin.trackListInfo
    let loadKicks = gettin.trackListInfo[0].notes
    let loadSnares = gettin.trackListInfo[1].notes
    let loadHho = gettin.trackListInfo[2].notes
    let loadHhc = gettin.trackListInfo[3].notes


    console.log('tracklist', trackList[0].onNotes)
    trackList[0].onNotes = loadKicks
    trackList[1].onNotes = loadSnares
    trackList[2].onNotes = loadHho
    trackList[3].onNotes = loadHhc

    let content = trackList.map((track, trackID) => {
        let key = trackID
        let { title, onNotes, soundFile, id } = track

        let soundFilePath = soundFiles[soundFile]

        console.log("loadedKicks", loadKicks)
        console.log('loaded', loadedNotes)
        console.log('id', trackID)

        ///useEffect


        return (
            <>

                <Track

                    id={id}
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
            <button onClick={(e) => console.log('fuck')} > LOAD BEAT </ button>
            <p>Beat1 is the reset!</p>
        </>
    )
}

export default memo(TrackList)