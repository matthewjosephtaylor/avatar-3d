import type { PBRMaterial } from "@babylonjs/core";
import {
  Animates,
  Canvas,
  isDefined,
  type ArcRotateCameraOptions,
  type ModelPath,
} from "@mjtdev/engine";
import { Button } from "@mui/material";
import { Stack, StackProps } from "@mui/system";
import { memo, useEffect, useRef, useState } from "react";
import MorphControls from "./debug/morph/MorphControls";
import type { Humanoid } from "./humanoid/gltf/frmGltf";
import { Humanoids } from "./humanoid/Humanoids";
import {
  initMeyda,
  type PhonemeLevels,
} from "./humanoid/audio/calculateVisemeLevels";
import PhonemeLevelsDisplay from "./debug/viseme/PhonemeLevelsDisplay";

export const Avatar3dGltf = memo(
  ({
    path,
    showControls,
    showPhonemes,
    analyserNode,
    canvasStyle,
    canvasWidth,
    canvasHeight,
    cameraOptions,
    ...rest
  }: StackProps & {
    path: ModelPath;
    showControls?: boolean;
    showPhonemes?: boolean;
    analyserNode?: AnalyserNode;
    canvasStyle?: React.CSSProperties;
    canvasWidth?: number;
    canvasHeight?: number;
    cameraOptions?: ArcRotateCameraOptions;
  }) => {
    const ref = useRef({
      humanoid: undefined as Humanoid | undefined,
    });

    const [modelLoaded, setModelLoaded] = useState(false);

    useEffect(() => {
      if (!modelLoaded) {
        console.log("refusing to start audio analysis before model is loaded");
        return;
      }
      if (!analyserNode) {
        console.log("No analyser node provided for MorphControls");
        return;
      }

      // let controls drive animations if enabled
      if (showControls) {
        return;
      }
      if (!ref.current.humanoid) {
        console.log("No humanoid found");
        return;
      }
      const morphs = ref.current.humanoid.model.getMorphs();

      const meydaAnalyzer = initMeyda(analyserNode, (levels) => {
        if (!ref.current.humanoid) {
          return;
        }
        const updatedControls: Record<string, number> = {};

        for (const control of morphs) {
          const levelKey = control
            .replace("eCTRLv", "")
            .toLocaleUpperCase() as keyof PhonemeLevels;

          const level = levels[levelKey];
          if (isDefined(level)) {
            updatedControls[control] = Math.max(0, level * 0.2);
          }
        }
        ref.current.humanoid.model.morph(updatedControls);
      });

      return () => {
        meydaAnalyzer.stop();
      };
    }, [analyserNode, ref.current, showControls, modelLoaded]);

    return (
      <Stack direction={"row"} {...rest}>
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
          style={canvasStyle}
          width={canvasWidth}
          height={canvasHeight}
          painter={async (canvas) => {
            const humanoid = await Humanoids.fromGltf({
              canvas,
              path: path,
              cameraOptions,
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
            setModelLoaded(true);
            return () => {
              console.log("disposing scene");
              humanoid.destroy();
              anims.destroy();
            };
          }}
        />
        {showPhonemes && <PhonemeLevelsDisplay analyserNode={analyserNode} />}
      </Stack>
    );
  }
);
