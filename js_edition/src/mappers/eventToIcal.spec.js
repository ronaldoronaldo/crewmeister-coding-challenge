import moment from "moment";
import eventToIcal from "./eventToIcal";

describe("When converting event", () => {
  it("should return a valid ical", () => {
    const event = {
      title: "Mike",
      type: "sickness",
      start: moment("2017-01-01"),
      end: moment("2017-01-02"),
    };
    const expectedIcal = {
      description: "sickness",
      end: "2017-01-02T02:00:00.000Z",
      location: "",
      start: "2017-01-01T02:00:00.000Z",
      subject: "Mike",
    };
    const ical = eventToIcal(event);
    expect(ical).toStrictEqual(expectedIcal);
  });
});
