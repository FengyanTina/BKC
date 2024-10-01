// utils/dateUtils.ts
// const formatDateToSwedishFullDate = (date: Date) => {
//   return date.toLocaleDateString("sv-SE", {
//     year: "numeric",
//     month: "2-digit",
//     day: "2-digit",
//   });
// };
// const formatDateToSwedishMonDay = (date: Date) => {
//   return date.toLocaleDateString("sv-SE", {
//     month: "2-digit",
//     day: "2-digit",
//   });
// };
// // Helper function to format date
// const conditionalFormatDate = (date: Date, showFullDate: boolean = true) => {
//   if (showFullDate) {
//     // Format full date (Swedish format)
//     return date.toLocaleDateString("sv-SE", {
//       year: "numeric",
//       month: "2-digit",
//       day: "2-digit",
//     });
//   } else {
//     // Format only month and day
//     return date.toLocaleDateString("sv-SE", {
//       month: "2-digit",
//       day: "2-digit",
//     });
//   }
// };

export default function formatDateTime(date: Date): string {
  if (!(date instanceof Date)) {
    throw new Error("Invalid date object");
  }

  // Format the date as 'YYYY-MM-DD'
  const formattedDate = date.toLocaleDateString("sv-SE");

  // Format the time as 'HH:mm'
  const formattedTime = date.toLocaleTimeString("sv-SE", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Combine and return the date and time
  return `${formattedDate} ${formattedTime}`;
}
