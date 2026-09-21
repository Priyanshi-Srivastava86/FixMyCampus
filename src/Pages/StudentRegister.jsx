import React from 'react'
import './CSS/StudentRegister.css'

const StudentRegister = () => {
  return (
    <>
    
        <div className="registration-page">

            <div className="logo">
                <span>Fix</span>
                <span>My</span>
                <span>Campus</span>
            </div>

            <p className="subtitle">
                Create your account to get started.
            </p>

            <div className="registration-card">
                <h3>Register as</h3>

                <div className="role-btn">
                <button> Student </button>

                <button> Admin </button>
                </div>

                <div className="input-detail">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your name"/>
                </div>

                <div className="input-detail">
                <label>Email</label>
                <input type="email" placeholder="Enter your email"/>
                </div>

                <div className="input-detail">
                <label>Password</label>
                <input type="password" placeholder="Create a password"/>
                </div>

                <div className="input-row">

                    <div className="input-detail">
                        <label>Class</label>

                        <select defaultValue="">
                            <option value="" disabled> Select class </option>
                            <option value="9">9th</option>
                            <option value="10">10th</option>
                            <option value="11">11th</option>
                            <option value="12">12th</option>
                        </select>
                    </div>

                    <div className="input-detail">
                        <label>Roll Number</label>
                        <input type="text" placeholder="e.g. 4" />
                    </div>
                </div>

                <div className="input-row">

                    <div className="input-detail">
                        <label>Division</label>
                        <input type="text" placeholder="e.g. A" />
                    </div>

                    <div className="input-detail">
                        <label>Year</label>
                        <select defaultValue="">
                            <option value="" disabled > Select year </option>
                            <option value="2024">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                        </select>
                    </div>
                </div>

                <button className="register-btn">
                    <span>Register</span>
                    <span className="arrow">→</span>
                </button>
            </div>

        </div>
    
    
    </>
  )
}

export default StudentRegister