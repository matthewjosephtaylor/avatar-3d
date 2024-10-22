import { Canvas, type ModelBuilder } from "@mjtdev/engine";
import { memo, useState } from "react";
import { Humanoids } from "./humanoid/Humanoids";
import { Stack } from "@mui/system";
import MorphControls from "./debug/morph/MorphControls";

export const Avatar3dGltf = memo(
  ({ analyserNode }: { analyserNode?: AnalyserNode }) => {
    console.log("NEW Avatar3dGltf");
    const [state, setState] = useState({
      morphs: [] as string[],
      humanoid: undefined as ModelBuilder | undefined,
    });
    return (
      <Stack direction={"row"}>
        <MorphControls
          controls={Object.fromEntries(
            state.morphs.map((m) => [
              m,
              {
                min: -2,
                max: 2,
              },
            ])
          )}
          defaultValues={{}}
          onChange={(morphs) => {
            console.log("morphs", morphs);
            // state.humanoid?.morph(morphs);
            state.humanoid?.morph({ aa: 1 });
          }}
        />
        <Canvas
          style={{ maxHeight: "50vh" }}
          painter={async (canvas) => {
            const { destroy, humanoid } = await Humanoids.fromGltf({
              canvas,
              // gltfUrl: "./female8-clothed2.glb",
              gltfUrl: "./female8-visemes3.glb",
              // analyserNode,
            });
            if (state.morphs.length === 0) {
              setState((s) => ({
                ...s,
                morphs: humanoid.getMorphs(),
                humanoid,
              }));
            }
            console.log("humanoid", humanoid);
            return () => {
              console.log("disposing scene");
              destroy();
            };
          }}
        />
      </Stack>
    );
  }
);
