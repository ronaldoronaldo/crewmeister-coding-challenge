import ical from "../services/ical"

export default function useIcal() {
  function downloadIcal(events) {
    ical(events)
  }

  return {
    downloadIcal,
  }
}
