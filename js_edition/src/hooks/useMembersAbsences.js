import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { updateMembersAbsences } from '../store/absences'

import fetchMembersWithAbsences from '../services/members'

import absencesToEvents from '../mappers/absencesToEvents'

export default function useMembersAbsences(startDate, endDate, userId) {
  const dispatch = useDispatch()
  const { membersAbsences } = useSelector(store => store.absences)

  useEffect(() => {
    ;(async () => {
      const members = await fetchMembersWithAbsences(startDate, endDate, userId)
      const absencesEvents = absencesToEvents(members)
      await dispatch(updateMembersAbsences(absencesEvents))
    })()
  }, [dispatch, startDate, endDate, userId])

  return {
    membersAbsences
  }
}
