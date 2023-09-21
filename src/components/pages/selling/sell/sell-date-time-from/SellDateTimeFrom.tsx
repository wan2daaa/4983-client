// import React, { useState, useEffect } from "react";
// import TimePicker from "react-time-picker";
//
// import * as style from "@/components/pages/selling/sell/sell-date-time-from/SellDateTimeFrom.style";
//
// export default function SellDateTimeFrom() {
//   const [selectedTime, setSelectedTime] = useState("00:00");
//
//   useEffect(() => {
//     setSelectedTime("00:00");
//   }, []);
//
//   const handleTimeChange = (time: string | null) => {
//     setSelectedTime(time || "00:00");
//   };
//   return (
//     <style.TimeDiv>
//       <TimePicker onChange={handleTimeChange} value={selectedTime} />
//       <style.TimeSvg />
//     </style.TimeDiv>
//   );
// }
