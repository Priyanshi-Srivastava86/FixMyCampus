import React from 'react'
import './CSS/Hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
    <div className='hero'>
        <h2>Fix My Campus Issues</h2><br /> <br />
        <h3> Report, Track, Resolved Campus Problem in One Place</h3><br /><br /><br />

        <Link to="/reportissue">Report an Issue</Link>
    </div>
    </>
  )
}
export default Hero