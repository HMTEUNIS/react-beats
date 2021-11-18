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

    let trackOptions;
    
    switch(title){
        case "Kick":
            trackOptions =
                (<select className="track_title" id='Kick' onChange={handleSoundSelection}>
                    <option value="kick1">Kick1</option>
                    <option value="kick2">Kick2</option>
                    <option value="kick3">Kick3</option>
                    <option value="kick4">Kick4</option>
                    <option value="kick5">Kick5</option>
                    <option value="kick6">Kick6</option>
                </select>)
            break;
        case "Snare":
            trackOptions = 
                (<select className="track_title" id='Snare' onChange={handleSoundSelection}>
                    <option value="snare1">Snare1</option>
                    <option value="snare2">Snare2</option>
                    <option value="snare3">Snare3</option>
                    <option value="snare4">Snare4</option>
                    <option value="snare5">Snare5</option>
                    <option value="snare6">Snare6</option>
                </select>)
            break;
        case "Open Hat":
            trackOptions = 
                (<select className="track_title" id='Open Hat' onChange={handleSoundSelection}>
                    <option value="hh_open1">Open Hat1</option>
                    <option value="hh_open2">Open Hat2</option>
                    <option value="hh_open3">Open Hat3</option>
                    <option value="hh_open4">Open Hat4</option>
                    <option value="hh_open5">Open Hat5</option>
                    <option value="hh_open6">Open Hat6</option>
                </select>)
            break;
        case "Closed Hat":
            trackOptions = 
                (<select className="track_title" id='Closed Hat' onChange={handleSoundSelection}>
                    <option value="hh_closed1">Closed Hat1</option>
                    <option value="hh_closed2">Closed Hat2</option>
                    <option value="hh_closed3">Closed Hat3</option>
                    <option value="hh_closed4">Closed Hat4</option>
                    <option value="hh_closed5">Closed Hat5</option>
                    <option value="hh_closed6">Closed Hat6</option>
                </select>)
            break;
        case "Cymbal":
            trackOptions = 
                (<select className="track_title" id='Cymbal' onChange={handleSoundSelection}>
                    <option value="cymbal1">Cymbal1</option>
                    <option value="cymbal2">Cymbal2</option>
                    <option value="cymbal3">Cymbal3</option>
                    <option value="cymbal4">Cymbal4</option>
                    <option value="cymbal5">Cymbal5</option>
                    <option value="cymbal6">Cymbal6</option>
                </select>)
            break;
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
