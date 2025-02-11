document.addEventListener("DOMContentLoaded", () => {
    const dropdownButtons = document.querySelectorAll(".dropdownButton");
    const dropdownMenus = document.querySelectorAll(".dropdownMenu");
  
    // Loop through each dropdown button and add the event listener
    dropdownButtons.forEach((button, index) => {
      const dropdownMenu = dropdownMenus[index];
  
      // Toggle the dropdown visibility with fade effect
      button.addEventListener("click", (e) => {
        if (dropdownMenu.classList.contains("hidden")) {
          dropdownMenu.classList.remove("hidden");
          // Trigger fade-in by removing opacity-0 and enabling pointer-events
          setTimeout(() => {
            dropdownMenu.classList.remove("opacity-0", "pointer-events-none");
            dropdownMenu.classList.add("opacity-100", "pointer-events-auto");
          }, 10); // Small delay to trigger the transition
        } else {
          // Fade-out and hide the menu
          dropdownMenu.classList.remove("opacity-100", "pointer-events-auto");
          dropdownMenu.classList.add("opacity-0", "pointer-events-none");
          setTimeout(() => {
            dropdownMenu.classList.add("hidden");
          }, 300); // Wait for fade-out animation to complete
        }
      });
    });
  
    // Close dropdown if clicked outside
    document.addEventListener("click", (event) => {
      dropdownButtons.forEach((button, index) => {
        const dropdownMenu = dropdownMenus[index];
        if (!button.contains(event.target) && !dropdownMenu.contains(event.target)) {
          dropdownMenu.classList.remove("opacity-100", "pointer-events-auto");
          dropdownMenu.classList.add("opacity-0", "pointer-events-none");
          setTimeout(() => {
            dropdownMenu.classList.add("hidden");
          }, 300); // Wait for fade-out animation to complete
        }
      });
    });
  });
  