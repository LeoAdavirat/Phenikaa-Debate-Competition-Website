import * as stageFunction from "./module.js";

// stageFunction.spam_butterfly();

function fetchStage() {
  return fetch("/get_stage")
    .then((response) => response.json())
    .then((data) => {
      console.log("Current Stage:", data.stage);
      return data.stage; // Return the stage value
    })
    .catch((error) => {
      console.error("Error:", error);
      return null; // Return null in case of an error
    });
}

function doIt(currentStage) {
  if (currentStage === 0) {
    stageFunction.showCenteredImage(true);
  } else if (currentStage === 1) {
    stageFunction.showCenteredImage(false);
  } else if (currentStage === 2) {
    console.log("hi");
    stageFunction.spam_butterfly();
  }
}
let pastStage;
doIt(fetchStage());
fetchStage().then((stage) => {
    if (stage !== null) {
        pastStage = stage;

        setInterval(() => {
            fetchStage().then((currentStage) => {
                if (currentStage !== null) {
                    console.log("Current Stage:", currentStage);
                    console.log("Past Stage:", pastStage);

                    if (currentStage !== pastStage) {
                        doIt(currentStage);

                        if (pastStage === 0) {
                            stageFunction.showCenteredImage(false);
                        }

                        if (pastStage === 2) {
                            location.reload();
                        }

                        pastStage = currentStage;
                    }
                }
            });
        }, 150); // Interval of 3 seconds
    }
});
