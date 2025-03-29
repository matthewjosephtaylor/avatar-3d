import {
  Babs,
  Cameras,
  Lights,
  Models,
  Scenes,
  type ArcRotateCameraOptions,
  type ModelBuilder,
  type ModelPath,
} from "@mjt-engine/babs";
import { produce } from "immer";
import { animateBlink, type EyeControls } from "../animation/animateBlink";
import type { PhonemeLevels } from "../audio/calculateVisemeLevels";
import type { Humanoid } from "./Humanoid";
import { applyGltfModelFixes } from "./applyGltfModelFixes";
import { Colors } from "@mjt-engine/color";
import { isDefined } from "@mjt-engine/object";

export const fromGltf = async ({
  path,
  canvas,
  // idleAnimationUrl,
  cameraOptions = {},
}: {
  path: ModelPath;
  canvas: HTMLCanvasElement;
  // idleAnimationUrl?: string;
  cameraOptions?: ArcRotateCameraOptions;
}): Promise<Humanoid> => {
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
    ...cameraOptions,
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

  applyGltfModelFixes(model);

  let eyeControlsState: Record<string, number> = {};
  const controls: EyeControls = {
    leftClosed: (value: number) => {
      model.morph({ EyesClosedL: value });
    },
    rightClosed: (value: number) => {
      model.morph({ EyesClosedR: value });
    },
    updateState: (updater) => {
      eyeControlsState = produce(eyeControlsState, updater);
    },
    getState: () => {
      return eyeControlsState;
    },
  };
  return {
    destroy: () => {
      scene.dispose();
      engine.dispose();
    },
    gltfModel: model,
    updateTick: ({ tick }) => {
      scene.render();
      animateBlink(controls, tick?.deltaMs / 1000);
    },
    updatePhonemeLevels: ({ analyserNode, phonemeLevels: levels }) => {
      updateGltfPhonemeLevels({ model, levels });
    },

    setAnimation: async (animationUrl) => {},
    setExpression: (expression, value = 0.5) => {},
    getExpressions: () => {
      return [];
    },
  };
};

export const updateGltfPhonemeLevels = ({
  model,
  levels,
}: {
  model: ModelBuilder;
  levels: PhonemeLevels;
}) => {
  const updatedControls: Record<string, number> = {};
  const morphs = model.getMorphs();

  for (const control of morphs) {
    const levelKey = control
      .replace("eCTRLv", "")
      .toLocaleUpperCase() as keyof PhonemeLevels;

    const level = levels[levelKey];
    if (isDefined(level)) {
      updatedControls[control] = Math.max(0, level * 0.2);
    }
  }
  model.morph(updatedControls);
};
