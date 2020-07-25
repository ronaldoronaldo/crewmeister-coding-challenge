import ics from "../utils/ics";

import eventToIcal from "../mappers/eventToIcal";

export default function downloadIcal(events) {
  const ical = ics();
  events.forEach((event) => {
    const { subject, description, location, start, end } = eventToIcal(event);
    ical.addEvent(subject, description, location, start, end);
  });
  ical.download();
}
