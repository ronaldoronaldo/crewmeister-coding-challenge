import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { updateMembersAbsences } from '../store/absences'


import fetchMembersWithAbsences from '../services/members'

export default function useMembersAbsences(startDate, endDate) {
  const dispatch = useDispatch()
  const { members } = useSelector(store => store.absences)

  useEffect(() => {
    ;(async () => {
      const members = await fetchMembersWithAbsences(startDate, endDate)
      await dispatch(updateMembersAbsences(members))
    })()
  }, [startDate, endDate])

  return {
    members
  }
}
