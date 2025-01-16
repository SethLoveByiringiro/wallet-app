// src/hooks/useDarkMode.ts
import { useEffect } from "react";

// Update the type to accept a callback function
export function useDarkModeShortcut(
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
) {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Toggle dark mode with Ctrl/Cmd + D
      if ((event.ctrlKey || event.metaKey) && event.key === "d") {
        event.preventDefault();
        setDarkMode((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [setDarkMode]);
}
