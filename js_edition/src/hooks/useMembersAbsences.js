import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { updateMembersAbsences } from '../store/absences'

import fetchMembersWithAbsences from '../services/members'

export default function useMembersAbsences(startDate, endDate, userId) {
  const dispatch = useDispatch()
  const { membersAbsences } = useSelector(store => store.absences)

  useEffect(() => {
    ;(async () => {
      const members = await fetchMembersWithAbsences(startDate, endDate, userId)
      await dispatch(updateMembersAbsences(members))
    })()
  }, [dispatch, startDate, endDate, userId])

  return {
    membersAbsences
  }
}
