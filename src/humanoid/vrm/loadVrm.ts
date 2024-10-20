import { VRMLoaderPlugin, type VRM, VRMUtils } from "@pixiv/three-vrm";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


export const loadVrm = async (vrmUrl: string) => {
  const loader = new GLTFLoader();
  loader.register((parser) => new VRMLoaderPlugin(parser));

  const vrm = await new Promise<VRM>((resolve) => {
    loader.load(vrmUrl, (gltf) => {
      const loadedVrm = gltf.userData.vrm as VRM;

      // VRM post-processing
      VRMUtils.removeUnnecessaryVertices(gltf.scene);
      VRMUtils.removeUnnecessaryJoints(gltf.scene);

      loadedVrm.scene.traverse((obj: { frustumCulled: boolean; }) => {
        obj.frustumCulled = false;
      });

      // setVrm(loadedVrm);
      // rotate if the VRM is VRM0.0
      resolve(loadedVrm);
    });
  });

  VRMUtils.rotateVRM0(vrm);
  return vrm;
};
