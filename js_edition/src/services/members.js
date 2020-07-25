import moment from "moment";
import { members, absences } from "../api";

function filterAbsencesByUserId(absences, userId) {
  let filteredAbsencesByUserId = [...absences];
  if (userId) {
    filteredAbsencesByUserId = filteredAbsencesByUserId.filter(absence => absence.userId === parseInt(userId));
  }
  return filteredAbsencesByUserId;
}

function filterAbsencesByDate(absences, startDate, endDate) {
  let filteredAbsencesByDate = [...absences];
  if (startDate) {
    const start = moment(startDate);
    filteredAbsencesByDate = filteredAbsencesByDate.filter((absence) => {
      const startAbsence = moment(absence.startDate);
      return startAbsence >= start;
    });
  }
  if (endDate) {
    const end = moment(endDate);
    filteredAbsencesByDate = filteredAbsencesByDate.filter((absence) => {
      const endAbsence = moment(absence.endDate);
      return endAbsence <= end;
    });
  }
  return filteredAbsencesByDate;
}

function joinMembersWithAbsences(absences, members) {
  return absences.map((absence) => ({
    ...absence,
    member: members.find((member) => absence.userId === member.userId),
  }));
}

function getMembersAbsences(absences, members, startDate, endDate, userId) {
  const filteredByUserId = filterAbsencesByUserId(absences, userId)
  const filteredAbsencesByDate = filterAbsencesByDate(
    filteredByUserId,
    startDate,
    endDate
  );
  return joinMembersWithAbsences(filteredAbsencesByDate, members);
}

export default async function fetchMembersWithAbsences(startDate, endDate, userId) {
  const allMembers = await members();
  const allAbsences = await absences();
  return getMembersAbsences(
    allAbsences.payload,
    allMembers.payload,
    startDate,
    endDate,
    userId,
  );
}
