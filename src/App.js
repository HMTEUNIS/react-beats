import React, { useState, useEffect } from 'react'
import ToolBar from './components/Toolbar'
import Steps from './components/Steps'
import TrackList from './components/TrackList'
import PlayHead from './components/PlayHead'
import { Provider } from './hooks/useStore'
import useTimer from './hooks/useTimer'
import useStyles from './hooks/useStyles'
import './App.css'
import Keys from './Keys'
import Nav from './components/Nav'
import Piano from './components/Piano'

function App() {

    const baseBPMPerOneSecond = 60
    const stepsPerBar = 8
    const beatsPerBar = 4
    const barsPerSequence = 2
    const totalSteps = stepsPerBar * barsPerSequence
    const totalBeats = beatsPerBar * barsPerSequence

    const [BPM, setBPM] = useState(120)
    const [startTime, setStartTime] = useState(null)
    const [pastLapsedTime, setPastLapse] = useState(0)
    const [currentStepID, setCurrentStep] = useState(null)
    const [getNotesAreaWidthInPixels] = useStyles(totalSteps)

    const notesAreaWidthInPixels = getNotesAreaWidthInPixels(totalSteps)
    const timePerSequence = baseBPMPerOneSecond / BPM * 1000 * totalBeats
    const timePerStep = timePerSequence / totalSteps
    const isSequencePlaying = startTime !== null
    const playerTime = useTimer(isSequencePlaying)
    const lapsedTime = isSequencePlaying ? Math.max(0, playerTime - startTime) : 0
    const totalLapsedTime = pastLapsedTime + lapsedTime

    //save beat
    const [savedPattern, savePattern] = useState ([])

    useEffect(() => {
        if (isSequencePlaying) {
            setCurrentStep(Math.floor(totalLapsedTime / timePerStep) % totalSteps)
        } else {
            setCurrentStep(null)
        }
    }, [isSequencePlaying, timePerStep, totalLapsedTime, totalSteps])

    const toolBarProps = {
        setStartTime,
        setPastLapse,
        setBPM,
        isSequencePlaying,
        startTime,
        BPM
    }

    const playHeadProps = {
        notesAreaWidthInPixels,
        timePerSequence,
        totalLapsedTime
    }

    const trackListProps = {
        currentStepID
    }

    return (
        <Provider>
            <main className="app">
                <Nav />
                <header className="app_header">
                    <h1 className="app_title">REACT-808</h1>
                    <ToolBar {...toolBarProps} />
                </header>
                <Steps count={totalSteps} />
                <div className="app_content">
                    <PlayHead {...playHeadProps} />
                    <TrackList {...trackListProps} />
                </div>
                <footer className="app_footer">
                    <a> Special Thanks to Joe Seifi for the React808 ap!</a>
                </footer>
                <div className="keys">
                    <Keys />
                </div>
            </main >
            <Piano/>
        </Provider>
        
        
    )
}

export default App
