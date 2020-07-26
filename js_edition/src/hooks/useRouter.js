import { useHistory } from 'react-router-dom'
import moment from "moment";


export default function useRouter() {
  const history = useHistory()
  function redirect(url) {
    history.push(url)
  }
  function redirectWithDateRange(range) {
    const { startDate, endDate } = range
    const startDateFormatted = moment(startDate).format().split('T')[0]
    const endDateFormatted = moment(endDate).format().split('T')[0]
    history.push(`?startDate=${startDateFormatted}&endDate=${endDateFormatted}`)
  }
  return { redirect, redirectWithDateRange }
}
