import {
  Babs,
  Cameras,
  Colors,
  Lights,
  Models,
  Scenes,
  type ModelPath,
  type Tick,
} from "@mjtdev/engine";
import { produce } from "immer";
import { animateBlink, type EyeControls } from "../animation/animateBlink";
import { updateGltfAudio } from "./updateGltfAudio";

export type Humanoid = Awaited<ReturnType<typeof fromGltf>>;

export const fromGltf = async ({
  path,
  canvas,
  idleAnimationUrl,
}: {
  path: ModelPath;
  canvas: HTMLCanvasElement;
  idleAnimationUrl?: string;
}) => {
  const engine = Babs.createEngine({
    canvas,
    premultipliedAlpha: false,
    antialias: true,
  });
  const scene = Scenes.createScene(engine);
  scene.clearColor = Babs.c4(Colors.from("black").alpha(0).toString());
  // scene.imageProcessingConfiguration.exposure = 1
  // scene.imageProcessingConfiguration.toneMappingEnabled = false

  const camera = Cameras.getArcRotateCamera(scene, "Camera", {
    alpha: Math.PI / 2,
    beta: Math.PI / 2,
    radius: 0.5,
    target: [0, 1.67, 0],
  });
  camera.minZ = 0.001;
  camera.inertia = 0;
  camera.attachControl(canvas, true);
  Lights.getHemisphericLight(scene, "light1", {
    direction: [10, 1, 1],
    intensity: 0.5,
  });

  Lights.getPointLight(scene, "light2", {
    position: [1, 1, 2],
    intensity: 15,
  });

  // Scenes.toggleInspector(scene);
  canvas!.onkeyup = (ev) => {
    // ctrl+I
    if (ev.ctrlKey && ev.keyCode === 73) {
      Scenes.toggleInspector(scene);
    }
  };

  const model = await Models.builder({ path: path, scene });

  const morphs = model.getMorphs();
  console.log("morphs", morphs);
  const state = {
    audioEnabled: true,
  };
  let controlsState: Record<string, number> = {};
  const controls: EyeControls = {
    leftClosed: (value: number) => {
      model.morph({ EyesClosedL: value });
    },
    rightClosed: (value: number) => {
      model.morph({ EyesClosedR: value });
    },
    updateState: (updater) => {
      controlsState = produce(controlsState, updater);
    },
    getState: () => {
      return controlsState;
    },
  };
  return {
    destroy: () => {
      scene.dispose();
      engine.dispose();
    },
    model,
    update: ({
      tick,
      analyserNode,
    }: {
      tick: Tick;
      analyserNode?: AnalyserNode;
    }) => {
      scene.render();
      if (state.audioEnabled) {
        updateGltfAudio({ analyserNode, model });
      }
      animateBlink(controls, tick?.deltaMs / 1000);
    },
    toggleAudio: () => {
      state.audioEnabled = !state.audioEnabled;
    },
    disableAudio: () => {
      state.audioEnabled = false;
    },
    enableAudio: () => {
      state.audioEnabled = true;
    },
    isAudioEnabled: () => state.audioEnabled,
  };
};
