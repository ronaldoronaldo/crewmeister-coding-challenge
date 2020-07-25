import moment from 'moment'

export default function absencesToEvents(absences) {
  return absences.map((absence, index) => ({
    id: index,
    title: absence.member.name,
    userId: absence.userId,
    allDay: true,
    type: absence.type,
    start: moment(absence.startDate),
    end: moment(absence.endDate),
  }))
}