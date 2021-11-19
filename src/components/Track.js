import React, { memo } from 'react'
import useSound from '../hooks/useSound'
import Note from './Note'
import './Track.css'

let Track = ({
    trackID,
    currentStepID,
    title,
    noteCount,
    onNotes,
    soundFile,
    soundFilePath,
    handleSoundSelection
}) => {
    const [play] = useSound(soundFilePath)
        
    const notes = [...Array(noteCount)].map((el, i) => {
        const isNoteOn = onNotes.indexOf(i) !== -1
        const isNoteOnCurrentStep = currentStepID === i
        const stepID = i

        return (
            <Note
                key={i}
                trackID={trackID}
                stepID={stepID}
                isNoteOn={isNoteOn}
                isNoteOnCurrentStep={isNoteOnCurrentStep}
                play={play}
            />
        )
    })

    const selectedTrackSound = soundFile
    
    
    let trackOptions;
    
    switch(title){
        case "Kick":
            trackOptions =
                (<select className="track-select" id='Kick' onChange={handleSoundSelection} value={selectedTrackSound}>
                    <option value="kick1">Kick 1</option>
                    <option value="kick2">Kick 2</option>
                    <option value="kick3">Kick 3</option>
                    <option value="kick4">Kick 4</option>
                    <option value="kick5">Kick 5</option>
                    <option value="kick6">Kick 6</option>
                </select>)
            break;
        case "Snare":
            trackOptions = 
                (<select className="track-select" id='Snare' onChange={handleSoundSelection} value={selectedTrackSound}>
                    <option value="snare1">Snare 1</option>
                    <option value="snare2">Snare 2</option>
                    <option value="snare3">Snare 3</option>
                    <option value="snare4">Snare 4</option>
                    <option value="snare5">Snare 5</option>
                    <option value="snare6">Snare 6</option>
                </select>)
            break;
        case "Open Hat":
            trackOptions = 
                (<select className="track-select" id='Open Hat' onChange={handleSoundSelection} value={selectedTrackSound}>
                    <option value="hh_open1">Open Hat 1</option>
                    <option value="hh_open2">Open Hat 2</option>
                    <option value="hh_open3">Open Hat 3</option>
                    <option value="hh_open4">Open Hat 4</option>
                    <option value="hh_open5">Open Hat 5</option>
                    <option value="hh_open6">Open Hat 6</option>
                </select>)
            break;
        case "Closed Hat":
            trackOptions = 
                (<select className="track-select" id='Closed Hat' onChange={handleSoundSelection} value={selectedTrackSound}>
                    <option value="hh_closed1">Closed Hat 1</option>
                    <option value="hh_closed2">Closed Hat 2</option>
                    <option value="hh_closed3">Closed Hat 3</option>
                    <option value="hh_closed4">Closed Hat 4</option>
                    <option value="hh_closed5">Closed Hat 5</option>
                    <option value="hh_closed6">Closed Hat 6</option>
                </select>)
            break;
        // case "Cymbal":
        //     trackOptions = 
        //         (<select className="track-select" id='Cymbal' onChange={handleSoundSelection}>
        //             <option value="cymbal1">Cymbal1</option>
        //             <option value="cymbal2">Cymbal2</option>
        //             <option value="cymbal3">Cymbal3</option>
        //             <option value="cymbal4">Cymbal4</option>
        //             <option value="cymbal5">Cymbal5</option>
        //             <option value="cymbal6">Cymbal6</option>
        //         </select>)
        //     break;
        }
    
    return (
        <>
            <div className="track">
                {/* <header className="track_title">{title}</header> */}
                {trackOptions}
                <main className="track_notes">
                    {notes}
                </main>
            </div>
        </>
    )
}

export default memo(Track)
