import type { VRM } from "@pixiv/three-vrm";

let blinkTimer = 0;
let blinkDuration = 0.05; // Duration for a full blink
let nextBlinkTime = Math.random() * 8 + 4; // Random interval between blinks
let blinkState = 0; // 0 = waiting, 1 = closing, 2 = closed, 3 = opening

// Stagger the start times for left and right eye blinks
let leftEyeDelay = Math.random() * 0.05; // Small delay for left eye
let rightEyeDelay = Math.random() * 0.05; // Small delay for right eye

// Function to animate both eyes blinking with staggered start times
export function animateBlink(vrm: VRM, deltaSeconds: number) {
  if (!vrm.expressionManager) {
    return;
  }
  // Update the timer with deltaSeconds
  blinkTimer += deltaSeconds;

  if (blinkState === 0) {
    // Waiting for the next blink
    if (blinkTimer >= nextBlinkTime) {
      blinkState = 1; // Start closing eyes
      blinkTimer = 0; // Reset blink timer
    }
  } else if (blinkState === 1) {
    // Closing eyes
    // Progress for closing eyes
    const leftBlinkProgress = (blinkTimer - leftEyeDelay) / blinkDuration;
    const rightBlinkProgress = (blinkTimer - rightEyeDelay) / blinkDuration;

    // Check if either eye has fully closed
    const leftFullyClosed = leftBlinkProgress >= 1;
    const rightFullyClosed = rightBlinkProgress >= 1;

    if (leftFullyClosed && rightFullyClosed) {
      blinkState = 2; // Eyes fully closed
      blinkTimer = 0; // Reset timer for holding eyes closed
      vrm.expressionManager.setValue("blinkLeft", 1); // Left eye fully closed
      vrm.expressionManager.setValue("blinkRight", 1); // Right eye fully closed
    } else {
      // Gradually close left and right eye with staggered start times
      vrm.expressionManager.setValue(
        "blinkLeft",
        Math.min(leftBlinkProgress, 1)
      );
      vrm.expressionManager.setValue(
        "blinkRight",
        Math.min(rightBlinkProgress, 1)
      );
    }
  } else if (blinkState === 2) {
    // Eyes fully closed, hold for a moment
    if (blinkTimer >= 0.05) {
      // Hold for 0.05 seconds
      blinkState = 3; // Start opening eyes
      blinkTimer = 0;
    }
  } else if (blinkState === 3) {
    // Opening eyes
    // Progress for opening eyes
    const leftBlinkProgress = 1 - (blinkTimer - leftEyeDelay) / blinkDuration;
    const rightBlinkProgress = 1 - (blinkTimer - rightEyeDelay) / blinkDuration;

    // Check if either eye has fully opened
    const leftFullyOpen = leftBlinkProgress <= 0;
    const rightFullyOpen = rightBlinkProgress <= 0;

    if (leftFullyOpen && rightFullyOpen) {
      blinkState = 0; // Fully open, reset state
      blinkTimer = 0;
      vrm.expressionManager.setValue("blinkLeft", 0); // Left eye fully open
      vrm.expressionManager.setValue("blinkRight", 0); // Right eye fully open
      nextBlinkTime = Math.random() * 8 + 4; // Randomize the next blink time
      blinkDuration = Math.random() * 0.05 + 0.05; // Duration for a full blink

      // Re-randomize the delays for asymmetry in the next blink
      leftEyeDelay = Math.random() * 0.05;
      rightEyeDelay = Math.random() * 0.05;
    } else {
      // Gradually open left and right eye with staggered start times
      vrm.expressionManager.setValue(
        "blinkLeft",
        Math.max(leftBlinkProgress, 0)
      );
      vrm.expressionManager.setValue(
        "blinkRight",
        Math.max(rightBlinkProgress, 0)
      );
    }
  }
}
