import { members, absences } from "../api";

export default async function fetchMembersWithAbsences(startDate, endDate) {
  const allMembers = await members();
  const allAbsences = await absences();
  return allMembers.payload;
}
