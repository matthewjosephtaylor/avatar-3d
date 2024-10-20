import { Animates } from "@mjtdev/engine";
import { WebGLRenderer, AnimationMixer } from "three";
import { createVrmScene } from "./createVrmScene";
import { loadMixamoAnimation } from "./loadMixamoAnimation";
import { updateVrmAudio } from "./updateVrmAudio";
import { VrmState } from "./vrmState";

export const fromVrm = async ({
  vrmUrl,
  canvas,
  analyserNode,
  idleAnimationUrl,
}: {
  vrmUrl: string;
  canvas: HTMLCanvasElement;
  analyserNode?: AnalyserNode;
  idleAnimationUrl?: string;
}) => {
  const { camera, scene, vrm } = await createVrmScene({ canvas, vrmUrl });
  const renderer = new WebGLRenderer({
    canvas,
    antialias: true,
  });

  const currentMixer = new AnimationMixer(vrm.scene);
  if (idleAnimationUrl) {
    const clip = await loadMixamoAnimation(idleAnimationUrl, vrm);
    console.log("clip", clip);
    currentMixer.clipAction(clip).play();
  }
  // await applyIdleAnimations(vrm, idleAnimationUrl
  const vrmState = new VrmState(vrm);
  vrm.scene.position.y = +0.5;
  const anim = Animates.create({
    ticker: ({ deltaMs }) => {
      const deltaSeconds = deltaMs / 1000;
      renderer.render(scene, camera);
      if (vrm) {
        vrm.update(deltaSeconds);
        // applyIdleAnimations(vrm, deltaSeconds);
        currentMixer.update(deltaSeconds);
        updateVrmAudio({ vrm, analyserNode, vrmState });
        vrmState.updateState(deltaSeconds);
        // animateBlink(vrm, deltaSeconds);
        // animateExpressions(vrm, deltaSeconds);
      }
    },
  });

  const destroy = () => {
    console.log("disposing scene");
    anim.destroy();
    renderer.dispose();
  };
  return { destroy, vrm, anim };
};
