import React from 'react'
import "./Message.css";
function MessageNav() {
  return (
  
   <div className="second-container">
   <div className="messgae-box">
     <h1>Message</h1>
     <div className="center-dropdown">
       <div className="dropdown-container">
         <h3>Hello</h3>
         <select className="dropdown">
           <option value="" disabled selected>
             Select an option
           </option>
           <option value="option1">Option 1</option>
           <option value="option2">Option 2</option>
           <option value="option3">Option 3</option>
         </select>
       </div>
       <div className="dropdown-container">
         <h3>Hello</h3>
         <select className="dropdown">
           <option value="" disabled selected>
             Select an option
           </option>
           <option value="option1">Option 1</option>
           <option value="option2">Option 2</option>
           <option value="option3">Option 3</option>
         </select>
       </div>
       <div className="dropdown-container">
         <h3>Assigned HR</h3>
         <select className="dropdown">
           <option value="" disabled selected>
             Select an option
           </option>
           <option value="option1">Option 1</option>
           <option value="option2">Option 2</option>
           <option value="option3">Option 3</option>
         </select>
       </div>
       <div className="filter-container">
         <button className="filter-button">Filter</button>
       </div>
     </div>
   </div>
 </div>
  )
}

export default MessageNav