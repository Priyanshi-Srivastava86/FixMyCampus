import React, { useState } from 'react'
import '../Pages/CSS/TrackProblem.css'

const TrackProblem = () => {
  const [problem, setProblem] = useState('')
  const [result, setResult] = useState(null)

  const trackProblem = () => {
    if (problem === '') {
      alert('Please enter a problem')
      return
    }

    const savedIssue = localStorage.getItem('reportedIssue')
    if (savedIssue) {
      const issue = JSON.parse(savedIssue)
      setResult(issue)
    } else {
      alert('No problem found')
    }
  }

  return (
    <div className="back">
    
      <div className="header-section">
        <h2>Track Problem</h2>
        <p>Enter your problem name or ID to check its current status.</p>
      </div>
      <br /><br />

     
      <div className="search-box">
        <input
          type="text" placeholder="Enter problem name or ID"value={problem} onChange={(e) => setProblem(e.target.value)}/>
        <button onClick={trackProblem}>Track</button>
        <button onClick={() => {
          setProblem('')
          setResult(null)
        }}>
          Clear
        </button>
      </div>
      <br /><br /><br />

     
      {result && (
        <div className="result-card">
          <h3>{result.title}</h3>
          <p><b>Status:</b> In Progress</p>
          <p><b>Location:</b> {result.location}</p>
          <p><b>Category:</b> {result.category}</p>
          <p><b>Description:</b> {result.description}</p>
          <p className="footer-text">Your problem is currently being worked on.</p>
        </div>
      
      )}
        <br />

      <div className="recent-section">
        <h2>Recent Problems</h2>
        <div className="problem-list">
          <div className="problem-card">
            <h3>AC not working</h3>
            <p>Block B</p>
            <span>In Progress</span>
          </div>
            
          <div className="problem-card">
            <h3>Water leakage</h3>
            <p>Block A</p>
            <span>Resolved</span>
          </div>
          <div className="problem-card">
            <h3>Corridor lights</h3>
            <p>Library Building</p>
            <span>Under Review</span>
          </div>
        </div>
      </div>
        <br />  <br />  <br />  <br />  <br />  <br />  <br />  <br />

      
      <div className="how-section">
        <h2>How Tracking Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Report</h3>
            <p>You report a problem on campus.</p>
          </div>
          <div className="step">
            <h3>2. Review</h3>
            <p>The campus team checks your report.</p>
          </div>
          <div className="step">
            <h3>3. Resolve</h3>
            <p>The problem is fixed and updated.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default TrackProblem
