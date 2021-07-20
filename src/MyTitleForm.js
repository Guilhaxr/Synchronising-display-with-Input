import React, { useState } from "react";

function MyTitleForm() {
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value.replace(/[^\w\s]/gi, ""))};
   
  return (
    <div>
      <h1 className="Title">{!title ? "I'm a synced Title, update me below" : title}</h1>
      <div className="Input">
      <label htmlFor="title">Title :</label>
      <input id="title" type="text" 
      value={title} onChange={handleChange}/>
      </div>
    </div>
  );
}

export default MyTitleForm;