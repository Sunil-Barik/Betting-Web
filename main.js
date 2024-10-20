window.onload = function() {
  // Set the launch date for the countdown
  let launchDate = new Date("2024-10-21T12:00:00").getTime();
  //hello
  // Start the countdown timer that calls the tick function every second
  let timer = setInterval(tick, 1000);

  function tick() {
      let now = new Date().getTime(); // Get the current time
      let t = launchDate - now; // Calculate the time remaining

      if (t > 0) {
          // Calculate days, hours, minutes, and seconds
          let days = Math.floor(t / (1000 * 60 * 60 * 24));
          let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
          let secs = Math.floor((t % (1000 * 60)) / 1000);

          // Format numbers to only show when greater than zero
          let timeParts = [];
          if (days > 0) {
              timeParts.push(days + "d"); // Add days if greater than zero
          }
          if (hours > 0 || days > 0) { // Show hours if there are days or hours remaining
              timeParts.push(hours + "h"); // Add hours if greater than zero
          }
          if (mins > 0 || hours > 0 || days > 0) { // Show minutes if there are hours or days remaining
              timeParts.push(mins + "m"); // Add minutes if greater than zero
          }
          timeParts.push(secs + "s"); // Always show seconds

          // Combine time parts into a single string
          let timePrint = timeParts.join(" : ");

          // Update all elements with the class 'time' and prepend the icon
          const timeElements = document.querySelectorAll('.time');
          timeElements.forEach((element) => {
              element.innerHTML = `<i class='bx bx-time-five'></i> ${timePrint}`; // Set the time text with icon
          });

      } else {
          clearInterval(timer); // Stop the timer when countdown ends
          
          // Set all time elements to "00" for each part
          const timeElements = document.querySelectorAll('.time');
          timeElements.forEach((element) => {
              element.innerHTML = `<i class='bx bx-time-five'></i> 00s`; // Set text for end of countdown
          });
      }
  }
};
