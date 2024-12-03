import React, { Component, useState } from 'react'
import Moodform from './components/Moodform'
import Moodcalendar from './components/Moodcalender'
import MoodStats from './components/Moodstats'

const App =()=> {
  const [moods, setMoods] = useState([]);

  const addmood = (newMood) => {
    setMoods([...moods, newMood]) 
    
 
}
return (
<div className='divi'>
      <h1>Mood Tracker</h1>
      <Moodform addmood={addmood} />
      <Moodcalendar moods={moods} />
      <MoodStats moods={moods} />
    </div>

)
}
export default App
