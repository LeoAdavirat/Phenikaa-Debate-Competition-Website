function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function createExplosion(x, y) {
  const explosion = document.createElement('div');
  explosion.className = 'explosion';
  explosion.style.left = `${x}px`;
  explosion.style.top = `${y}px`;

  // Generate random colors for the explosion
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  explosion.style.background = `radial-gradient(circle, ${color1} 0%, ${color2} 100%)`;

  document.body.appendChild(explosion);

  // Remove the explosion after the animation is done
  setTimeout(() => {
      explosion.remove();
  }, 1000); // Duration of the animation in milliseconds
}

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

  // Apply a random color filter
  var hueRotate = Math.floor(Math.random() * 360);
  butterfly.style.filter = `hue-rotate(${hueRotate}deg)`;

   // Create an explosion effect at the butterfly's initial position
    createExplosion(initialX + width / 2, initialY + height / 2);

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

  // Remove the butterfly after a random duration between 50 and 60 seconds
  var removeTime = 5000;
  setTimeout(() => {
      butterfly.remove();
      createExplosion(x, y);
  }, removeTime);
}


// export function showCenteredImage(show) {
//   // Create the image element
//   var img = document.createElement("img");
//   img.src = "static/images/qart.png"; // Flask URL
//   img.style.position = "absolute";
//   img.style.left = "50%";
//   img.style.top = "50%";
//   img.style.transform = "translate(-50%, -50%)"; // Center the image
//   img.style.maxWidth = "100%";
//   img.style.maxHeight = "100%";

//   // Append the image to the body
  
//   document.body.appendChild(img);
// }





export function showCenteredImage(show) {
  let img = document.getElementById('centeredImage');
  img.style.display = show ? 'block' : 'none';
}


export function spam_butterfly() {
  addButterfly();
  let intervalId = setInterval(() => {
      if (document.querySelectorAll('img[src="static/images/butterfly.gif"]').length < 200) {
          addButterfly();
      } else {
          // clearInterval(intervalId);
      }
  }, Math.floor(Math.random() * (50 - 0 + 1)) + 20); // Random interval between 20 and 50 milliseconds
}


// document.addEventListener('keydown', function(event) {
//     if (event.shiftKey && event.key === 'D') {
//         spam_butterfly();
//     }
// });
// // Call the function to display the image
// showCenteredImage();
