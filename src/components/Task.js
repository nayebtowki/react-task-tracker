import { useState } from 'react';
const Task = () => {
  const[tasks,setTracks] = useState([
    {
      id:1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30PM',
      reminder:true,
  },
  {
      id:2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30PM',
      reminder:true,
  },
  {
      id:3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30PM',
      reminder:true,    
  }
  ])
  return (
    <div>
        {tasks.map((task) =>(
          <h3>
              {task.text}
          </h3>)
        )}
    </div>
  )
}

export default Task