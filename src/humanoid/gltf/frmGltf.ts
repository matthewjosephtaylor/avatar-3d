import {
  Animates,
  Babs,
  Cameras,
  Lights,
  Models,
  Objects,
  Scenes,
} from "@mjtdev/engine";
import { updateGltfAudio } from "./updateGltfAudio";

export const fromGltf = async ({
  gltfUrl,
  canvas,
  analyserNode,
  idleAnimationUrl,
}: {
  gltfUrl: string;
  canvas: HTMLCanvasElement;
  analyserNode?: AnalyserNode;
  idleAnimationUrl?: string;
}) => {
  const engine = Babs.createEngine({ canvas });
  const scene = Scenes.createScene(engine);
  // const light = Lights.getHemisphericLight(scene, "light");
  // const camera = Cameras.getUniversalCamera(scene, "camera");

  const camera = Cameras.getArcRotateCamera(scene, "Camera", {
    alpha: Math.PI / 2,
    beta: Math.PI / 2,
    radius: 0.5,
    target: [0, 1.67, 0],
  });
  camera.minZ = 0.001;
  camera.inertia = 0;
  // camera.target = Babs.v3([0, 1, 0]);
  // setTimeout(() => {
  //   console.log("camera", camera);
  //   // camera.alpha = 1.5;
  //   // camera.beta = 1.5;
  //   camera.setTarget(Babs.v3([0, 1.67, 0]));
  //   camera.alpha
  //   // camera.radius = 0.2;
  // }, 10000);
  // camera.position.x
  camera.attachControl(canvas, true);
  Lights.getHemisphericLight(scene, "light1", {
    direction: [1, 1, 1],
  });
  // Scenes.toggleInspector(scene);
  canvas!.onkeyup = (ev) => {
    // ctrl+I
    if (ev.ctrlKey && ev.keyCode === 73) {
      Scenes.toggleInspector(scene);
      // Inspector.Show(scene, {
      //   overlay: true, // If you want the inspector as an overlay
      // });
      // if (debug) {
      //   scene.debugLayer.hide();
      // } else {
      //   scene.debugLayer.show();
      // }
    }
  };

  // const hw = Babs.helloWorld(engine);
  const model = await Models.builder({ path: gltfUrl, scene });
  // console.log("model", model);

  // const model = await Models.loadDazFigure({
  //   path: gltfUrl,
  //   scene,
  // });
  const morphs = model.getMorphs();
  console.log("morphs", morphs);
  const anims = Animates.create({
    ticker: () => {
      scene.render();
      updateGltfAudio({ analyserNode, model });
      // const morphMap = Objects.fromEntries(morphs.map((m) => [m, 1]));
      // model.morph(morphMap);
    },
  });
  return {
    destroy: () => {
      scene.dispose();
      engine.dispose();
      anims.destroy();
    },
    humanoid: model,
  };
};
