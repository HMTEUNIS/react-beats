
const sequenceList = [
    {
        id: 0,
        title: 'Kit 1',
        noteCount: 16,
        trackList: [
            {   
                title: 'Kick',
                soundFile: 'kick1',
                onNotes: [],
               
            },
            {
                title: 'Snare',
                soundFile: 'snare1',
                onNotes: [],
              
            },
            {
                title: 'Open Hat',
                soundFile: 'hh_open1',
                onNotes: [],
             
            },
            {
                title: 'Closed Hat',
                soundFile: 'hh_closed1',
                onNotes: [],
                
            }
        ]
    
        
    },
    {
        id: 1,
        title: 'Kit 2',
        noteCount: 16,
        trackList: [
            {   
                title: 'Kick',
                soundFile: 'kick1',
                onNotes: [],
                
            },
            {
                title: 'Snare',
                soundFile: 'snare1',
                onNotes: [],
               
            },
            {
                title: 'Open Hat',
                soundFile: 'hh_open1',
                onNotes: [],
                
            },
            {
                title: 'Closed Hat',
                soundFile: 'hh_closed1',
                onNotes: [],
                
            }
        ]
    }
]


const soundFiles = {
    'kick1': '/sounds/kick1.wav',
    'snare1': '/sounds/snare1.wav',
    'hh_open1': '/sounds/hh_open1.wav',
    'hh_closed1': '/sounds/hh_closed1.wav',
   
    
}

export { sequenceList, soundFiles }
