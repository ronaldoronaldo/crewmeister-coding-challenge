export default function (event) {
  return {
    subject: event.title,
    description: event.type,
    location: "",
    start: event.start.toISOString(),
    end: event.end.toISOString(),
  };
}
