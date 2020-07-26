import { useHistory } from 'react-router-dom'

export default function useRedirect() {
  const history = useHistory()
  function redirect(url) {
    history.push(url)
  }
  return { redirect }
}
