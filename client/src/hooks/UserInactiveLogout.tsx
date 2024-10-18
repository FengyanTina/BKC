import { useEffect } from "react";

const useInactivityLogout = (timeoutDuration: number, onLogout: () => void) => {
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleActivity = () => {
      if (timeoutId) {
        clearTimeout(timeoutId); // Clear previous timeout
      }
      // Reset the timeout
      timeoutId = setTimeout(() => {
        onLogout(); // Call the logout function
      }, timeoutDuration);
    };

    // Attach event listeners to track user activity
    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keydown", handleActivity);
    window.addEventListener("click", handleActivity);
    window.addEventListener("touchstart", handleActivity); // For touch devices

    // Initialize the timeout on mount
    handleActivity();

    return () => {
      clearTimeout(timeoutId); // Cleanup on unmount
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keydown", handleActivity);
      window.removeEventListener("click", handleActivity);
      window.removeEventListener("touchstart", handleActivity);
    };
  }, [timeoutDuration, onLogout]);
};

export default useInactivityLogout;
