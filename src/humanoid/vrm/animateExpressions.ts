import { Objects } from "@mjt-engine/object";
import type { VRM } from "@pixiv/three-vrm";

let expressionTimer = 0;
let expressionDuration = Math.random() * 10 + 10; // Random interval between 10 and 20 seconds
let transitionProgress = 0;
let currentExpressionSet: Record<string, number> = {};
let targetExpressionSet: Record<string, number> = {};

// Available expressions and their possible groups (emotion-related)
const expressionGroups = {
  happy: ["happy", "relaxed"],
  angry: ["angry", "Surprised"],
  sad: ["sad", "neutral"],
} as const;

// Initialize expressions
function initExpressionSet(): Record<string, number> {
  return {
    Surprised: 0,
    angry: 0,
    happy: 0,
    neutral: 1, // Start at neutral
    relaxed: 0,
    sad: 0,
  };
}

// Pick a new target expression set based on emotion groups
function getRandomExpressionSet(): Record<string, number> {
  const expressionSet = initExpressionSet();
  const groupKeys = Objects.keys(expressionGroups);
  const selectedGroup =
    expressionGroups[groupKeys[Math.floor(Math.random() * groupKeys.length)]];

  // Randomly set subtle intensities for expressions within the group
  selectedGroup.forEach((expression) => {
    expressionSet[expression] = Math.random() * 0.3 + 0.2; // More subtle intensity, 0.2 to 0.5
  });

  // Always blend in a bit of neutral (to keep the face relaxed and subtle)
  expressionSet["neutral"] = Math.random() * 0.5; // Keep a bit of neutral base

  return expressionSet;
}

// Update the facial expressions
export function animateExpressions(vrm: VRM, deltaSeconds: number) {
  expressionTimer += deltaSeconds;

  // Gradually transition to the new expression
  transitionProgress += deltaSeconds / 6; // Slower transition for subtlety (0.6 times slower)
  transitionProgress = Math.min(transitionProgress, 1); // Clamp between 0 and 1

  // Interpolate between the current and target expression sets
  Object.keys(currentExpressionSet).forEach((expression) => {
    const currentValue = currentExpressionSet[expression];
    const targetValue = targetExpressionSet[expression];
    const interpolatedValue =
      currentValue + (targetValue - currentValue) * transitionProgress;

    vrm.expressionManager?.setValue(expression, interpolatedValue * 0.5); // Keep it subtle
  });

  // Check if it's time to switch to a new expression set
  if (expressionTimer >= expressionDuration) {
    // Move target set to current set
    currentExpressionSet = { ...targetExpressionSet };
    transitionProgress = 0; // Reset transition progress

    // Choose a new target expression set
    targetExpressionSet = getRandomExpressionSet();

    expressionTimer = 0; // Reset expression timer
    expressionDuration = Math.random() * 10 + 10; // Set a new random interval for the next change
  }
}
