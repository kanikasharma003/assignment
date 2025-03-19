import React, { useState } from "react";
import EventCard from "./EventCard";
import AddEventForm from "./AddEventForm";

const Events = () => {
  const [events, setEvents] = useState([
    { title: "Charity Drive", date: "2025-04-10", category: "Charity", location: "New York" },
    { title: "Interfaith Meetup", date: "2025-05-15", category: "Social", location: "Los Angeles" },
    { title: "Religious Ceremony", date: "2025-06-20", category: "Religious", location: "Chicago" }
  ]);

  const [filter, setFilter] = useState("All");

  const filteredEvents = filter === "All" ? events : events.filter(event => event.category === filter);

  return (
    <div className="events">
      <h2>Upcoming Events</h2>

      <label>Filter by Category:</label>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>

      {filteredEvents.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}

      <AddEventForm setEvents={setEvents} />
    </div>
  );
};

export default Events;
