export const getWeek = (weekOffset = 0) => {
    const today = new Date();
    
    // Get the day of the week (0 is Sunday, 1 is Monday, etc.)
    const currentDayOfWeek = today.getDay();
    
    // In Sweden, the week starts on Monday, so calculate the start of the current week (Monday)
    const startOfWeek = today.getDate() - currentDayOfWeek + (currentDayOfWeek === 0 ? -6 : 1);
    
    // Add the weekOffset to calculate future weeks (7 days per week)
    const startOfDesiredWeek = startOfWeek + weekOffset * 7;
    
    const daysInSwedish = ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"]; // Days of the week in Swedish
    
    // Generate the desired week as an array of objects with date and dayName
    return Array.from({ length: 7 }, (_, index) => {
      const date = new Date(today); // Create a new date object to avoid mutation
      date.setDate(startOfDesiredWeek + index); // Set the correct day for the desired week
      
      // Define date formatting options
      const dateOptions: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "2-digit",
      };
      
      // Format the date as "DD/MM"
      const formattedDate = date.toLocaleDateString("sv-SE", dateOptions);
      
      // Return both the formatted date and the corresponding day name in Swedish
      return {
        date: formattedDate,
        dayName: daysInSwedish[date.getDay()], // Get day name using current day of the week index
      };
    });
  };
  
  // Example usage:
  
  // For the current week (this week)
  console.log(getWeek()); 
  
  // For the next week (starting 7 days from the current week)
  console.log("next week", getWeek(1)); 
  