import React, { useState } from "react";

const AddEventForm = ({ setEvents }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Religious");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents((prev) => [...prev, { title, date, category, location }]);
    setTitle("");
    setDate("");
    setCategory("Religious");
    setLocation("");
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <input type="text" placeholder="Event Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>
      <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default AddEventForm;
