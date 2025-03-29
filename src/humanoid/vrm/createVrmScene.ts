import { xOf, yOf, zOf, type Point3 } from "@mjt-engine/math";
import {
  AmbientLight,
  DirectionalLight,
  OrthographicCamera,
  Scene,
  WebGLRenderer,
} from "three";
import { loadVrm } from "./loadVrm";

export type VrmCameraOptions = Partial<{
  position: Point3;
  lookAt: Point3;
  frustumSize: number;
}>;

export const createVrmScene = async ({
  canvas,
  vrmUrl,
  vrmCameraOptions = {},
}: {
  canvas: HTMLCanvasElement;
  vrmUrl: string;
  vrmCameraOptions?: VrmCameraOptions;
}) => {
  const scene = new Scene();

  const aspect = canvas.width / canvas.height;

  const {
    frustumSize = 3, // Adjust this based on how much of the scene you want to see
    lookAt = [0, 1.5, 0],
    position = [0, 1.5, 2],
  } = vrmCameraOptions;

  const camera = new OrthographicCamera(
    (-frustumSize * aspect) / 2, // left
    (frustumSize * aspect) / 2, // right
    frustumSize / 2, // top
    -frustumSize / 2, // bottom
    0.1, // near
    1000 // far
  );

  // Position the camera in front of the model
  // camera.position.set(0, 1.5, 2); // Adjust Z to move closer/further from the model
  camera.position.set(xOf(position), yOf(position), zOf(position)); // Adjust Z to move closer/further from the model

  // Make the camera look at the model
  // camera.lookAt(0, 1.5, 0); // Pointing towards the model’s head or torso
  camera.lookAt(xOf(lookAt), yOf(lookAt), zOf(lookAt)); // Pointing towards the model’s head or torso

  const renderer = new WebGLRenderer({
    canvas,
    antialias: true,
    preserveDrawingBuffer: true,
  });
  renderer.setSize(canvas.width, canvas.height);
  renderer.setClearColor("grey", 0); // Set clear color to zero alpha (transparent)

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
