import React, { useState } from "react";
import "./CSS/ReportIssue.css";

const ReportIssue = () => {

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value, });
  };

  const handleSubmit = (e) => {e.preventDefault();

    console.log(formData);

    alert("Issue reported successfully!");

    setFormData({
      title: "",
      category: "",
      location: "",
      description: "",
    });
  };

  return (
    <div className="reportcontainer">

      <div className="report-box">

        <h2>Report a Campus Issue</h2>

        <p>
          Help us improve your campus by reporting any problem.
        </p>

        <form onSubmit={handleSubmit}>

        
          <label>Issue Title</label>

          <input type="text" name="title" placeholder="Example: Water cooler not working" value={formData.title} onChange={handleChange} required/>
          <label>Category</label>
          <select name="category" value={formData.category} onChange={handleChange} required>
            <option value="">Select Category</option>
            <option value="Electricity">Electricity</option>
            <option value="Water">Water</option>
            <option value="Cleanliness">Cleanliness</option>
            <option value="Infrastructure">Infrastructure</option>
            <option value="Internet">Internet</option>
            <option value="Other">Other</option>
          </select>

         
          <label>Location</label>

          <input type="text" name="location" placeholder="Example: lucknow" value={formData.location} onChange={handleChange} required />

          
          <label>Description</label>

          <textarea  name="description"  placeholder="Describe the problem..."  value={formData.description}  onChange={handleChange}  required></textarea>

          <button type="submit">
            Submit 
          </button>

        </form>

      </div>

    </div>
  );
};

export default ReportIssue;
