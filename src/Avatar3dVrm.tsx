import { Canvas } from "@mjtdev/engine";
import { memo } from "react";
import { getMicAudio } from "./getMicAudio";
import { Humanoids } from "./humanoid/Humanoids";
export const Avatar3dVrm = memo(() => {
  return (
    <Canvas
      style={{ maxHeight: "50vh" }}
      painter={async (canvas) => {
        const { audioCtx, stream, analyserNode } = await getMicAudio();
        const { destroy, vrm } = await Humanoids.fromVrm({
          analyserNode,
          canvas,
          vrmUrl: "./fem.vrm",
          // vrmUrl: "./2361673532999661696.vrm",
          // vrmUrl: "5262662047583516202.vrm",
          // vrmUrl: "./5628105011729249676.vrm",
          //  vrmUrl: "public/4342292266955867593.vrm",
          // vrmUrl: "public/9136875617833507199.vrm",
          // vrmUrl:"public/4502906891128881704.vrm",
          // vrmUrl:"public/1217118311536604849.vrm",
          // vrmUrl: "public/2373446975168613679.vrm",
          // vrmUrl: "public/5238333767475035100.vrm",
          // vrmUrl: "public/8937262576621938035.vrm",
          // idleAnimationUrl: "./Holding_Idle.fbx",

          // idleAnimationUrl: "./Idle_2.fbx",
          // idleAnimationUrl: "./Northern Soul Spin Combo.fbx"
          idleAnimationUrl: "./Samba Dancing.fbx",
        });
        console.log("vrm", vrm);
        return () => {
          console.log("disposing scene");
          destroy();
        };
      }}
    />
  );
});
