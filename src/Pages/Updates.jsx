import React, { useEffect } from 'react'
import { useState } from 'react'
import './CSS/Updates.css'

const Updates = () => {
  const [problem, setProblem] =useState('')
  const [message,setMessage] =useState('')
  const [UpdateMessage, setUpdateMessage]=useState('')

  useEffect(()=>{
     const savedIssue = localStorage.getItem('reportedIssue')
     if(savedIssue){
      const issue = JSON.parse(savedIssue)
      setProblem(issue.title)
     }
  },[])
    
    const update= ()=>{
  if(problem==='' || message ==='' ){
   
    return
  }
  setUpdateMessage(message)
  alert ('update successfully')

  setMessage('')
}


  return (
    <>
  
    <h1>Update Your Problem</h1> 
    <br /><br />

    <p> Keep your campus problem updated.
</p> <br /><br /><br /><br /><br />
   
     <div className='container'>


    <div className='left-container'>
      <h1>Problem</h1>  <br /><br />
      <input type="text" placeholder="Enter Problem ..." value={problem} onChange={(e)=> setProblem(e.target.value)} />
      <br /><br /><br />

      <p><b>Update Message</b></p> <br /><br />
      <textarea placeholder= "Write your update..." value={message} onChange={(e)=> setMessage(e.target.value)}>
      </textarea> <br /><br /> <br /> <br />


      <button onClick={update}>Update Problem</button>
</div>

    <div className='right-container'>
      <h2>Update Problem</h2>
     
      <br /><br />
    
      <p><b>Old Problem</b></p><br />

      <p>{problem}</p><br /><br />

      <p><b>Update problem:</b></p> <br />
      <p>{UpdateMessage}</p> <br /><br />

      <p><b>status</b></p>
      <p>In Process</p> <br /><br /><br />

      <button onClick={() => setUpdateMessage('')}>
    Reset
  </button>

    </div>
</div>
  </>
  )
}

export default Updates