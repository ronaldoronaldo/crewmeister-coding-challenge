import moment from "moment";
import fetchMembersWithAbsences from "./members";

describe("fetchMembersWithAbsences without provide params", () => {
  it("should return 42 rows", async () => {
    const membersWithAbsences = await fetchMembersWithAbsences();
    expect(membersWithAbsences.length).toBe(42);
  });
});

describe("fetchMembersWithAbsences providing startDate", () => {
  it("should return 10 rows", async () => {
    const membersWithAbsences = await fetchMembersWithAbsences("2017-06-01");
    expect(membersWithAbsences.length).toBe(10);
  });
  it("should only returns rows older than startDate", async () => {
    const startDate = "2017-06-01";
    const membersWithAbsences = await fetchMembersWithAbsences(startDate);
    membersWithAbsences.forEach((element) => {
      const isOlder = moment(startDate) <= moment(element.startDate);
      expect(isOlder).toBeTruthy();
    });
  });
});

describe("fetchMembersWithAbsences providing endDate", () => {
  it("should return 32 rows", async () => {
    const membersWithAbsences = await fetchMembersWithAbsences(
      null,
      "2017-06-01"
    );
    expect(membersWithAbsences.length).toBe(32);
  });
  it("should only returns rows newer than endDate", async () => {
    const endDate = "2017-06-01";
    const membersWithAbsences = await fetchMembersWithAbsences(null, endDate);
    membersWithAbsences.forEach((element) => {
      const isNewer = moment(endDate) >= moment(element.endDate);
      expect(isNewer).toBeTruthy();
    });
  });
});

describe("fetchMembersWithAbsences providing userId", () => {
  it("should return 32 rows", async () => {
    const membersWithAbsences = await fetchMembersWithAbsences(null, null, 649);
    expect(membersWithAbsences.length).toBe(3);
  });
  it("should only returns rows newer than endDate", async () => {
    const membersWithAbsences = await fetchMembersWithAbsences(null, null, 649);
    membersWithAbsences.forEach((element) => {
      expect(element.userId).toBe(649);
    });
  });
});

describe("fetchMembersWithAbsences providing all params", () => {
  it("should return 32 rows", async () => {
    const membersWithAbsences = await fetchMembersWithAbsences(
      "2017-01-01",
      "2017-02-01",
      649
    );
    expect(membersWithAbsences.length).toBe(1);
  });
  it("should only returns rows newer than endDate, older than start with correct userId", async () => {
    const membersWithAbsences = await fetchMembersWithAbsences(
      "2017-01-01",
      "2017-02-01",
      649
    );
    membersWithAbsences.forEach((element) => {
      const isOlder = moment("2017-01-01") <= moment(element.startDate);
      const isNewer = moment("2017-02-01") >= moment(element.endDate);

      expect(isOlder).toBeTruthy();
      expect(isNewer).toBeTruthy();
      expect(element.userId).toBe(649);
    });
  });
});
