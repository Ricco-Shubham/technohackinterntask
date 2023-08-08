const timerElement = document.getElementById("timer");
const endDate = new Date().getTime() + 24 * 60 * 60 * 1000; // Offer ends in 24 hours

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = endDate - now;

  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  timerElement.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

function toggleContent(stepNumber) {
    const content = document.getElementById(`content${stepNumber}`);
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  }


function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
  