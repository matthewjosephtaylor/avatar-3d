import { Animates, Canvas, type ModelPath } from "@mjtdev/engine";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import { memo, useRef } from "react";
import MorphControls from "./debug/morph/MorphControls";
import PhonemeLevels from "./debug/viseme/PhonemeLevels";
import type { Humanoid } from "./humanoid/gltf/frmGltf";
import { Humanoids } from "./humanoid/Humanoids";
import type { PBRMaterial } from "@babylonjs/core";

export const Avatar3dGltf = memo(
  ({
    analyserNode,
    path,
    showControls,
    showPhonemes,
  }: {
    analyserNode?: AnalyserNode;
    path: ModelPath;
    showControls?: boolean;
    showPhonemes?: boolean;
  }) => {
    const ref = useRef({
      humanoid: undefined as Humanoid | undefined,
    });
    return (
      <Stack direction={"row"}>
        {ref.current.humanoid && showControls && (
          <Stack>
            <Button
              onClick={() => {
                ref.current.humanoid?.toggleAudio();
              }}
            >
              Toggle Audio
            </Button>
            <MorphControls
              analyserNode={analyserNode}
              controls={Object.fromEntries(
                ref.current.humanoid.model.getMorphs().map((m) => [
                  m,
                  {
                    min: -2,
                    max: 2,
                  },
                ])
              )}
              defaultValues={{}}
              onChange={(morphs) => {
                ref.current.humanoid?.model.morph(morphs);
              }}
            />
          </Stack>
        )}
        <Canvas
          style={{ maxHeight: "50vh" }}
          painter={async (canvas) => {
            const humanoid = await Humanoids.fromGltf({
              canvas,
              path: path,
            });
            console.log("humanoid", humanoid);
            ref.current.humanoid = humanoid;
            humanoid.model.fix((mesh) => {
              if (mesh.material) {
                if (
                  mesh.name
                    .toLocaleLowerCase()
                    .includes("hair.shape_primitive0")
                ) {
                  console.log("hair", mesh);
                  const material = mesh.material as unknown as PBRMaterial;
                  material.metallic = 0;
                  const texture = material.albedoTexture;
                  if (texture) {
                    texture.hasAlpha = false;
                    texture.level = 1.5;
                  }
                }
                if (
                  mesh.name
                    .toLocaleLowerCase()
                    .includes("hair.shape_primitive1")
                ) {
                  console.log("hair", mesh);
                  mesh.visibility = 0;
                }
              }

              return mesh;
            });
            console.log("humanoid ref", ref.current.humanoid);
            const anims = Animates.create({
              ticker: (tick) => {
                humanoid.update({ tick, analyserNode });
              },
            });
            return () => {
              console.log("disposing scene");
              humanoid.destroy();
              anims.destroy();
            };
          }}
        />
        {showPhonemes && <PhonemeLevels analyserNode={analyserNode} />}
      </Stack>
    );
  }
);
