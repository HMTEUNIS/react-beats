import React from 'react'
import './Saved.css'

const Saved = ({fetched, setSelected, selected, re, setre}) => {
    
    const displayBeats = fetched.map (beat =>  <button className="span"  onClick={() => setSelected(beat.id)} >Beat {beat.id}</button>)

    function del (e) {
        console.log("pop")
        fetch(`http://localhost:4000/beats/${selected}`, {
  method: 'DELETE', 
})
.then(res => res.json())
.then(data => {
  setre(!re);
})
.catch((error) => {
  console.error('Error:', error);
});




    }


    return (
        <div>
            {displayBeats}
            <br />
            <button onClick={(e) => del()}>DELETE SELECTED</button>
        </div>
    )
}
        

export default Saved
