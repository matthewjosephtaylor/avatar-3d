import { Canvas } from "@mjtdev/engine";
import { memo } from "react";
import { getMicAudio } from "./getMicAudio";
import { Humanoids } from "./humanoid/Humanoids";
export const Avatar3dGltf = memo(() => {
  return (
    <Canvas
      style={{ maxHeight: "50vh" }}
      painter={async (canvas) => {
        const { audioCtx, stream, analyserNode } = await getMicAudio();
        const { destroy, humanoid } = await Humanoids.fromGltf({
          canvas,
          gltfUrl: "./female8-clothed2.glb",
          // gltfUrl: "./g8f-base.glb",
          analyserNode,
        });
        console.log("humanoid", humanoid);
        return () => {
          console.log("disposing scene");
          destroy();
        };
      }}
    />
  );
});
