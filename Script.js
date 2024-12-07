// GSAP Animation for Car Movement
gsap.registerPlugin(ScrollTrigger);

gsap.to('.car', {
  x: window.innerWidth - 150, // Move car across the screen
  scrollTrigger: {
    trigger: ".story-container",
    start: "top top",
    end: "bottom bottom",
    scrub: true, // Smoothens the animation while scrolling
    markers: false // Debugging: shows start and end points (remove in production)
  }
});

// Countdown Timer Script
const weddingDate = new Date("2025-03-02T00:00:00").getTime(); // Set wedding date and time

const countdownTimer = setInterval(() => {
  const now = new Date().getTime(); // Get current time
  const timeLeft = weddingDate - now; // Calculate time left

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Update the timer display
  document.getElementById("timer").innerHTML = `
    ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds
  `;

  // If the countdown is over, display a final message
  if (timeLeft < 0) {
    clearInterval(countdownTimer);
    document.getElementById("timer").innerHTML = "🎉 Happily Ever After! 🎉";
  }
}, 1000); // Update every second

document.getElementById('yes-btn').addEventListener('click', function() {
  alert('Yay! We can\'t wait to see you at the wedding! 🎉');
});

document.getElementById('no-btn').addEventListener('click', function() {
  alert('We\'ll miss you, but thank you for letting us know! ❤️');
});
