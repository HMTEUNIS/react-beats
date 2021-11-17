import React, { useContext, memo } from 'react'
import { Context } from '../hooks/useStore'
import { soundFiles } from '../constants/config'
import Track from './Track'
import { context } from 'tone'

const TrackList = ({ currentStepID }) => {
    const { sequence: { trackList, noteCount } } = useContext(Context)

    const toSave = trackList.map(track => {
        console.log(track)
        const soundSave = {
            name: track.soundFile,
            notes: track.onNotes
        }
        return soundSave
    })
    function saveIt(e) {
        const track0 = toSave[0].title


        let newBeat = {
            [toSave[0].name]: toSave[0].notes,
            [toSave[1].name]: toSave[1].notes,
            [toSave[2].name]: toSave[2].notes,
            [toSave[3].name]: toSave[3].notes

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



        //post  


        console.log('newBeat', newBeat)

    }

    const content = trackList.map((track, trackID) => {
        const { title, onNotes, soundFile } = track
        const soundFilePath = soundFiles[soundFile]





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

