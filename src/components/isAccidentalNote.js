import NOTES from './PianoNotes'
export default (note) => {
    return NOTES.includes(note) && note.includes('#')
}