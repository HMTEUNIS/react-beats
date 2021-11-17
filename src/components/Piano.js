import React, { Fragment, useState } from "react";
import Instrument from "./Instrument";
import './Piano.css'

const Piano = () => {
    const [instrumentName, setInstrumentName] = useState('acoustic_grand_piano')

    function handleChange(e) {
        setInstrumentName(e.target.value)
        console.log(e.target.value)
        console.log(instrumentName)
    }

    const accidentalKey = ({ isPlaying, text, eventHandlers }) => {
        return (
            <div className="piano-accidental-key-wrapper">
                <button
                    className={`piano-accidental-key ${isPlaying ? "piano-accidental-key-playing" : ""
                        } `}
                    {...eventHandlers}
                >
                    <div className="piano-text">{text}</div>
                </button>
            </div>
        );
    };

    const naturalKey = ({ isPlaying, text, eventHandlers }) => {
        return (
            <button
                className={`piano-natural-key ${isPlaying ? "piano-natural-key-playing" : ""
                    } `}
                {...eventHandlers}
            >
                <div className="piano-text">{text}</div>
            </button>
        );
    };

    const renderPianoKey = ({
        isAccidentalNote,
        isNotePlaying,
        startPlayingNote,
        stopPlayingNote,
        keyboardShortcut
    }) => {
        const KeyComponent = isAccidentalNote ? accidentalKey : naturalKey;

        const eventHandlers = {
            onMouseDown: startPlayingNote,
            onMouseUp: stopPlayingNote,
            onTouchStart: startPlayingNote,
            onMouseOut: stopPlayingNote,
            onTouchEnd: stopPlayingNote
        };

        return (
            <KeyComponent
                isPlaying={isNotePlaying}
                text={keyboardShortcut.join("/")}
                eventHandlers={eventHandlers}
            />
        );
    };

    return (
        <div className="piano-container">
            <label id="label">Choose an instrument</label>
                <select onChange={handleChange} id='instruments' name='instruments'>
                    <option value= "acoustic_grand_piano">acoustic grand piano</option>
                    <option value="banjo">banjo</option>
                </select>
            <Instrument
                instrumentName={instrumentName}
                startNote={"C3"}
                endNote={"B5"}
                renderPianoKey={renderPianoKey}
                keyboardMap={{
                    Q: "C3",
                    2: "C#3",
                    W: "D3",
                    3: "D#3",
                    E: "E3",
                    R: "F3",
                    5: "F#3",
                    T: "G3",
                    6: "G#3",
                    Y: "A3",
                    7: "A#3",
                    U: "B3",
                    I: "C4",
                    9: "C#4",
                    O: "D4",
                    0: "D#4",
                    P: "E4",
                    Z: "F4",
                    S: "F#4",
                    X: "G4",
                    D: "G#4",
                    C: "A4",
                    F: "A#4",
                    V: "B4",
                    B: "C5",
                    H: "C#5",
                    N: "D5",
                    J: "D#5",
                    M: "E5",
                    ",": "F5",
                    L: "F#5",
                    ".": "G5",
                    ";": "G#5",
                    "/": "A5",
                    "'": "A#5",
                    A: "B5"
                }}
            />
            
            
        </div>
    );
};

export default Piano;