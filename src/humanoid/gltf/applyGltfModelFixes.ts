import type { PBRMaterial } from "@babylonjs/core";
import type { ModelBuilder } from "@mjtdev/engine";


export const applyGltfModelFixes = (gltfModel?: ModelBuilder) => {
  if (!gltfModel) {
    return;
  }
  gltfModel.fix((mesh) => {
    if (mesh.material) {
      if (mesh.name.toLocaleLowerCase().includes("hair.shape_primitive0")) {
        console.log("hair", mesh);
        const material = mesh.material as unknown as PBRMaterial;
        material.metallic = 0;
        const texture = material.albedoTexture;
        if (texture) {
          texture.hasAlpha = false;
          texture.level = 1.5;
        }
      }
      if (mesh.name.toLocaleLowerCase().includes("hair.shape_primitive1")) {
        console.log("hair", mesh);
        mesh.visibility = 0;
      }
    }

    return mesh;
  });
};
