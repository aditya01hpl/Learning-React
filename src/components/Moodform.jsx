import React,{useEffect, useState} from 'react'


const Moodform=({addmood})=> {
  const [mood,setMood]=useState('')
  const[desc,setDescription]=useState('')
  const [date, setDate] = useState('');

  const handlesubmit=(e)=>{
    e.PreventDefault();
    if(mood){
      addmood({mood,desc,date})
      setMood('')
      setDescription('')
      setDate('')
    }
  }
return (
  <form className="mood-form" onSubmit={handlesubmit}>
  <label>
    Mood (Emoji or Text): 
    <input 
      type="text" 
      value={mood} 
      onChange={(e) => setMood(e.target.value)} 
      required 
    />
  </label>
  <label>
    Description (Optional): 
    <input 
      type="text" 
      value={desc} 
      onChange={(e) => setDescription(e.target.value)} 
    />
  </label>
  <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
  <button type="submit">Add Mood</button>
</form>
)

}

export default Moodform