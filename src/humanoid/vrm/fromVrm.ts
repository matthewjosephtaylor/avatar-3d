import { Animates } from "@mjtdev/engine";
import { AnimationMixer, WebGLRenderer } from "three";
import type { Humanoid } from "../gltf/Humanoid";
import { createVrmScene, type VrmCameraOptions } from "./createVrmScene";
import { loadMixamoAnimation } from "./loadMixamoAnimation";
import { VrmState } from "./vrmState";
import { updateVrmAudio } from "./updateVrmAudio";

export const fromVrm = async ({
  vrmUrl,
  canvas,
  // analyserNode,
  idleAnimationUrl,
  cameraOptions,
}: {
  vrmUrl: string;
  canvas: HTMLCanvasElement;
  // analyserNode?: AnalyserNode;
  cameraOptions?: VrmCameraOptions;
  idleAnimationUrl?: string;
}): Promise<Humanoid> => {
  const { camera, scene, vrm } = await createVrmScene({
    canvas,
    vrmUrl,
    vrmCameraOptions: cameraOptions,
  });
  const renderer = new WebGLRenderer({
    canvas,
    antialias: true,
  });

  const animationMixer = new AnimationMixer(vrm.scene);
  if (idleAnimationUrl) {
    const clip = await loadMixamoAnimation(idleAnimationUrl, vrm);
    console.log("clip", clip);
    animationMixer.clipAction(clip).play();
  }
  // await applyIdleAnimations(vrm, idleAnimationUrl
  const vrmState = new VrmState(vrm);
  vrm.scene.position.y = +0.5;

  const destroy = () => {
    console.log("disposing scene");
    renderer.dispose();
  };
  return {
    destroy,
    vrmModel: vrm,
    updateTick: ({ tick }) => {
      const deltaSeconds = tick.deltaMs / 1000;
      renderer.render(scene, camera);
      if (vrm) {
        vrm.update(deltaSeconds);
        // applyIdleAnimations(vrm, deltaSeconds);
        animationMixer.update(deltaSeconds);
        // updateVrmAudio({ vrm, analyserNode, vrmState });
        vrmState.updateState(deltaSeconds);
        // animateBlink(vrm, deltaSeconds);
        // animateExpressions(vrm, deltaSeconds);
      }
    },
    updatePhonemeLevels: ({ phonemeLevels, analyserNode }) => {
      // console.log("updating phoneme levels", phonemeLevels);
      updateVrmAudio({ vrm, vrmState, levels: phonemeLevels, analyserNode });
    },
    setAnimation: async (animationUrl) => {
      const clip = await loadMixamoAnimation(animationUrl, vrm);
      console.log("clip", clip);
      animationMixer.stopAllAction();
      animationMixer.clipAction(clip).play();
    },
    setExpression: (expression, value = 0.5) => {
      if (vrm.expressionManager) {
        vrm.expressionManager.setValue(expression, value);
      }
    },
    getExpressions: () => {
      return vrm.expressionManager
        ? vrm.expressionManager.expressions.map((e) => e.expressionName)
        : [];
    },
  };
};
