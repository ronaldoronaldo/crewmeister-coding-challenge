const UPDATE_MEMBERS_ABSENCES = 'absences/UPDATE_MEMBERS_ABSENCES'

const INITIAL_VALUES = {
  members: [],
}

export default function reducer(state = INITIAL_VALUES, action) {
  switch (action.type) {
    case UPDATE_MEMBERS_ABSENCES: 
      return {
        ...state,
        members: action.members,
      }
    default:
      return state
  }
}

export function updateMembersAbsences(members) {
  return {
    type: UPDATE_MEMBERS_ABSENCES,
    members,
  }
}
