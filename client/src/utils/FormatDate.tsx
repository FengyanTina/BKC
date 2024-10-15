import React from 'react'

type Props = {}

const FormatDate = (date: Date | string): string => {
    if (!(date instanceof Date)) {
        throw new Error("Invalid date object");
      }
    // Check if the input is a valid Date object or a valid date string
    const validDate = typeof date === "string" ? new Date(date) : date;
  
    
  
    // Format the date as 'YYYY-MM-DD'
    const formattedDate = validDate.toLocaleDateString("sv-SE");
  
   
  
    // Combine and return the date and time
    return `${formattedDate}`;
  };
  
  export default FormatDate;
  