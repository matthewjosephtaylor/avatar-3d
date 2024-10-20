import {
  AmbientLight,
  DirectionalLight,
  OrthographicCamera,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";
import { loadVrm } from "./loadVrm";

export const createVrmScene = async ({
  canvas,
  vrmUrl,
}: {
  canvas: HTMLCanvasElement;
  vrmUrl: string;
}) => {
  const scene = new Scene();
  // const camera = new PerspectiveCamera(
  //   50,
  //   canvas.width / canvas.height,
  //   0.1,
  //   1000
  // );
  // camera.position.set(0, 1.8, 1.8);
  // camera.lookAt(0, 1, 0);

  const aspect = canvas.width / canvas.height;
  const frustumSize = 3; // Adjust this based on how much of the scene you want to see

  const camera = new OrthographicCamera(
    (-frustumSize * aspect) / 2, // left
    (frustumSize * aspect) / 2, // right
    frustumSize / 2, // top
    -frustumSize / 2, // bottom
    0.1, // near
    1000 // far
  );

  // Position the camera in front of the model
  camera.position.set(0, 1.5, 2); // Adjust Z to move closer/further from the model

  // Make the camera look at the model
  camera.lookAt(0, 1.5, 0); // Pointing towards the model’s head or torso

  const renderer = new WebGLRenderer({
    canvas,
    antialias: true,
  });
  renderer.setSize(canvas.width, canvas.height);

  const light = new AmbientLight(0xffffff, 1);
  scene.add(light);

  const directionalLight = new DirectionalLight(0xffffff, 1);
  directionalLight.position.set(0, 1, 1).normalize();
  scene.add(directionalLight);

  const vrm = await loadVrm(vrmUrl);

  scene.add(vrm.scene);
  vrm.lookAt!.target = camera;
  return { scene, vrm, camera, renderer };
};
