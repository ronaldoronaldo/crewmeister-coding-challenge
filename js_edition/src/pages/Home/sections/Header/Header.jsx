import React from "react";
import useIcal from "../../../../hooks/useIcal";

export default function ({ events }) {
  const { downloadIcal } = useIcal();
  return (
    <div>
      <button onClick={() => downloadIcal(events)}> Download Ical </button>
    </div>
  );
}
