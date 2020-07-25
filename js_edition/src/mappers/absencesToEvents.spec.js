import moment from "moment";
import absencesToEvents from "./absencesToEvents";

describe("When converting absences", () => {
  it("should return a valid event", () => {
    const absences = [
      {
        member: {
          name: "Mike",
        },
        userId: 1,
        type: "sickness",
        startDate: "2017-01-01",
        endDate: "2017-01-02",
      },
      {
        member: {
          name: "tom",
        },
        userId: 2,
        type: "vacation",
        startDate: "2017-02-01",
        endDate: "2017-02-12",
      },
    ];
    const expectedEvents = [
      {
        allDay: true,
        end: "2017-01-02T02:00:00.000Z",
        id: 0,
        start: "2017-01-01T02:00:00.000Z",
        title: "Mike",
        type: "sickness",
        userId: 1,
      },
      {
        allDay: true,
        end: "2017-02-12T02:00:00.000Z",
        id: 1,
        start: "2017-02-01T02:00:00.000Z",
        title: "tom",
        type: "vacation",
        userId: 2,
      },
    ];
    const events = absencesToEvents(absences);
    // Normalizing dates
    events[0].start = events[0].start.toISOString();
    events[0].end = events[0].end.toISOString();
    events[1].start = events[1].start.toISOString();
    events[1].end = events[1].end.toISOString();
    expect(events).toStrictEqual(expectedEvents);
  });
});
