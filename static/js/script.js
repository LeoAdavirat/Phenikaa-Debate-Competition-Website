function addButterfly() {
  // Generate a random butterfly image URL
  var butterflyUrl = "static/images/butterfly.gif"; // Updated URL

  // Generate random width, height, and initial position
  var width = Math.floor(Math.random() * (70 - 50 + 1)) + 50;
  var height = width;
  var initialX = Math.floor(Math.random() * (1700 - width + 1));
  var initialY = Math.floor(Math.random() * (900 - height + 1));

  // Create the butterfly element
  var butterfly = document.createElement("img");
  butterfly.src = butterflyUrl; // Set the src attribute to the butterflyUrl
  butterfly.style.position = "absolute";
  butterfly.style.left = initialX + "px";
  butterfly.style.top = initialY + "px";
  butterfly.style.width = width + "px";
  butterfly.style.height = height + "px";
  document.body.appendChild(butterfly);

  // Make the butterfly fly up
  var y = initialY,
    x = initialX,
    speedX = 2,
    speedY = 2,
    directionX = Math.random() < 0.5 ? -1 : 1,
    directionY = Math.random() < 0.5 ? -1 : 1;

  var animationSpeed = Math.random() * (0.8 - 0.4) + 0.2;
  function fly() {
    x += animationSpeed * directionX;
    y += animationSpeed * directionY;

    // Bounce off the edges
    if (x <= 0 || x >= window.innerWidth - butterfly.offsetWidth) {
      directionX *= -1;
    }
    if (y <= 0 || y >= window.innerHeight - butterfly.offsetHeight) {
      directionY *= -1;
    }

    butterfly.style.top = y + "px";
    butterfly.style.left = x + "px";

    setTimeout(fly, animationSpeed);
  }

  fly();
}

function spam_butterfly() {
  addButterfly();
  let count = 0;
  let intervalId = setInterval(() => {
      addButterfly();
      count++;
      if (count >= 200) {
          clearInterval(intervalId);
      }
  }, Math.floor(Math.random() * (50 - 0 + 1)) + 20); // Random interval between 20 and 50 milliseconds
}


document.addEventListener('keydown', function(event) {
    if (event.shiftKey && event.key === 'D') {
        spam_butterfly();
    }
});
