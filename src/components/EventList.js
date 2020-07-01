import React from "react";
import events from "../Events";
import EventItem from "./EventItem";
 

const EventList = () => {
  const eventsList = events.map((event) => <EventItem event={event} />);
  return <div>{eventsList}</div>;
};
export default EventList;
