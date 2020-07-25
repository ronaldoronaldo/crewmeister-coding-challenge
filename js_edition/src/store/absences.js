const UPDATE_MEMBERS_ABSENCES = 'absences/UPDATE_MEMBERS_ABSENCES'

const INITIAL_VALUES = {
  membersAbsences: [],
}

export default function reducer(state = INITIAL_VALUES, action) {
  switch (action.type) {
    case UPDATE_MEMBERS_ABSENCES: 
      return {
        ...state,
        membersAbsences: action.membersAbsences,
      }
    default:
      return state
  }
}

export function updateMembersAbsences(membersAbsences) {
  return {
    type: UPDATE_MEMBERS_ABSENCES,
    membersAbsences,
  }
}
