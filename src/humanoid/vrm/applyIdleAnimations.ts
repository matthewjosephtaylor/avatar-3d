import type { VRM } from "@pixiv/three-vrm";

const idleAnimationState = { current: 0 }; // Track animation time for idle animations
export const applyIdleAnimations = (vrm: VRM, deltaTime: number) => {
  const idleAnimationSpeed = 0.5; // Speed factor for the animations
  idleAnimationState.current += deltaTime * idleAnimationSpeed;

  // Idle head rotation animation
  if (vrm.humanoid) {
    const headBone = vrm.humanoid.getNormalizedBoneNode("head"); // Use normalized bone
    if (headBone) {
      headBone.rotation.y = Math.sin(idleAnimationState.current) * 0.2; // Small Y-axis rotation
    }
  }

  // Add more idle animations here as needed
  // e.g., breathing, blinking, limb movements, etc.
};
