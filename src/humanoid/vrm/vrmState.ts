import { Objects } from "@mjtdev/engine";
import type { VRM } from "@pixiv/three-vrm";

export class VrmState {
  private vrm: VRM;
  // private expressionGroups: Record<string, string[]>;
  private expressionGroups = {
    happy: ["happy", "relaxed"],
    angry: ["angry", "Surprised"],
    sad: ["sad", "neutral"],
  };
  public expressionTimer: number = 0;
  public expressionDuration: number = 0;
  public transitionProgress: number = 0;
  public currentExpressionSet: Record<string, number> = {};
  public targetExpressionSet: Record<string, number> = {};
  public blinkTimer: number = 0;
  public blinkState: number = 0;
  public blinkDuration: number = 0.1;
  public nextBlinkTime: number = Math.random() * 6 + 4;
  public blinkLeftOffset: number = Math.random() * 0.02;
  public blinkRightOffset: number = -Math.random() * 0.02;

  constructor(vrm: VRM) {
    this.vrm = vrm;
    this.resetExpressions();
  }

  // Initialize expressions to neutral state
  private resetExpressions() {
    this.currentExpressionSet = {
      Surprised: 0,
      angry: 0,
      happy: 0,
      neutral: 1,
      relaxed: 0,
      sad: 0,
    };
    this.targetExpressionSet = { ...this.currentExpressionSet };
  }

  // Pick a new expression set based on emotion groups
  public pickNewExpressionSet(group?: keyof typeof this.expressionGroups) {
    const groupKeys = Objects.keys(this.expressionGroups);
    const selectedGroup = group
      ? this.expressionGroups[group]
      : this.expressionGroups[
          groupKeys[Math.floor(Math.random() * groupKeys.length)]
        ];

    const newExpressionSet = { ...this.currentExpressionSet };
    selectedGroup.forEach((expression) => {
      newExpressionSet[expression] = Math.random() * 0.3 + 0.2; // Random intensity 0.2 to 0.5
    });
    newExpressionSet["neutral"] = Math.random() * 0.5;

    this.targetExpressionSet = newExpressionSet;
    this.expressionDuration = Math.random() * 10 + 10; // 10 to 20 seconds
    this.expressionTimer = 0;
    this.transitionProgress = 0;
  }

  // Update the state based on deltaSeconds
  public updateState(deltaSeconds: number) {
    this.updateExpressions(deltaSeconds);
    this.updateBlink(deltaSeconds);
  }

  // Handle expression changes
  private updateExpressions(deltaSeconds: number) {
    this.expressionTimer += deltaSeconds;
    this.transitionProgress += deltaSeconds / 6;
    this.transitionProgress = Math.min(this.transitionProgress, 1);

    Object.keys(this.currentExpressionSet).forEach((expression) => {
      const currentValue = this.currentExpressionSet[expression];
      const targetValue = this.targetExpressionSet[expression];
      const interpolatedValue =
        currentValue + (targetValue - currentValue) * this.transitionProgress;

      this.vrm.expressionManager?.setValue(expression, interpolatedValue * 0.5);
    });

    if (this.expressionTimer >= this.expressionDuration) {
      this.currentExpressionSet = { ...this.targetExpressionSet };
      this.pickNewExpressionSet(); // Choose new target expressions
    }
  }

  // Handle blinking
  private updateBlink(deltaSeconds: number) {
    this.blinkTimer += deltaSeconds;

    if (this.blinkState === 0) {
      if (this.blinkTimer >= this.nextBlinkTime) {
        this.blinkState = 1; // Start closing eyes
        this.blinkTimer = 0;
      }
    } else if (this.blinkState === 1) {
      const blinkProgress = this.blinkTimer / this.blinkDuration;
      const leftEyeProgress = Math.min(blinkProgress + this.blinkLeftOffset, 1);
      const rightEyeProgress = Math.min(
        blinkProgress + this.blinkRightOffset,
        1
      );
      this.vrm.expressionManager?.setValue("blinkLeft", leftEyeProgress);
      this.vrm.expressionManager?.setValue("blinkRight", rightEyeProgress);

      if (blinkProgress >= 1) {
        this.blinkState = 2;
        this.blinkTimer = 0;
      }
    } else if (this.blinkState === 2) {
      if (this.blinkTimer >= 0.05) {
        this.blinkState = 3;
        this.blinkTimer = 0;
      }
    } else if (this.blinkState === 3) {
      const blinkProgress = 1 - this.blinkTimer / this.blinkDuration;
      const leftEyeProgress = Math.max(blinkProgress + this.blinkLeftOffset, 0);
      const rightEyeProgress = Math.max(
        blinkProgress + this.blinkRightOffset,
        0
      );
      this.vrm.expressionManager?.setValue("blinkLeft", leftEyeProgress);
      this.vrm.expressionManager?.setValue("blinkRight", rightEyeProgress);

      if (blinkProgress <= 0) {
        this.blinkState = 0;
        this.blinkTimer = 0;
        this.nextBlinkTime = Math.random() * 6 + 4; // New random blink time
      }
    }
  }
}
