import assert from "assert";
import { members, absences } from "./api";

const everyItemContainsKey = (key) => (collection) =>
  collection.forEach((item) => assert(Object.keys(item).includes(key)));

describe("members", () => {
  describe("every member has key", () => {
    ["id", "name", "userId", "image"].forEach((key) => {
      it(key, async () => {
        const allMembers = await members();
        everyItemContainsKey(key)(allMembers.payload);
      });
    });
  });
});

describe('absences', () => {
  describe('every absence has key', () => {
    [
      'admitterNote',
      'confirmedAt',
      'createdAt',
      'crewId',
      'endDate',
      'id',
      'memberNote',
      'rejectedAt',
      'startDate',
      'type',
      'userId',
    ].forEach((key) => {
      it(key, async () => {
        const allAbsences = await absences()
        everyItemContainsKey(key)(allAbsences.payload)
      });
    });
  });
});
