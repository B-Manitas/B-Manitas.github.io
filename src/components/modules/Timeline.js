// Import React components
import React from "react";

// Imports custom components
import Timebox from "./Timebox";

const Timeline = ({ data }) =>
  data.map((item, id) => <Timebox {...item} key={id} />);

export default Timeline;
