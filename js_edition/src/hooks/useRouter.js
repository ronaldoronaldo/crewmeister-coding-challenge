import { useHistory } from 'react-router-dom'

export default function useRouter() {
  const history = useHistory()
  function redirect(url) {
    history.push(url)
  }
  return { redirect }
}
