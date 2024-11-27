import {
  Animates,
  Canvas,
  type ArcRotateCameraOptions,
  type Point3,
  type Vec3,
} from "@mjtdev/engine";
import { Stack, StackProps } from "@mui/system";
import {
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import MorphControls from "./debug/morph/MorphControls";
import PhonemeLevelsDisplay from "./debug/viseme/PhonemeLevelsDisplay";
import { initMeyda } from "./humanoid/audio/calculateVisemeLevels";
import type { Humanoid } from "./humanoid/gltf/Humanoid";
import { Humanoids } from "./humanoid/Humanoids";
import type { VrmCameraOptions } from "./humanoid/vrm/createVrmScene";

export type Avatar3dRef = {
  getHumanoid: () => Humanoid | undefined;
};

export const Avatar3d = memo(
  forwardRef<
    Avatar3dRef,
    StackProps & {
      path: string;
      showControls?: boolean;
      showPhonemes?: boolean;
      analyserNode?: AnalyserNode;
      canvasStyle?: React.CSSProperties;
      canvasWidth?: number;
      canvasHeight?: number;
      gltfCameraOptions?: ArcRotateCameraOptions;
      vrmCameraOptions?: VrmCameraOptions;
      animationPath?: string;
    }
  >(
    (
      {
        path,
        showControls,
        showPhonemes,
        analyserNode,
        canvasStyle,
        canvasWidth,
        canvasHeight,
        gltfCameraOptions,
        vrmCameraOptions,
        animationPath,
        ...rest
      },
      forwardedRef
      // ref
    ) => {
      const ref = useRef({
        humanoid: undefined as Humanoid | undefined,
      });

      const [modelLoaded, setModelLoaded] = useState(false);

      useImperativeHandle(forwardedRef, () => {
        return {
          getHumanoid: () => {
            return ref.current.humanoid;
          },
        };
      });

      useEffect(() => {
        console.log("Setting up audio analysis");
        if (!modelLoaded) {
          console.log(
            "refusing to start audio analysis before model is loaded"
          );
          return;
        }
        if (!analyserNode) {
          console.log("No analyser node provided for MorphControls");
          return;
        }

        // let controls drive animations if enabled
        // if (showControls) {
        //   console.log("showControls enabled, skipping audio analysis");
        //   return;
        // }
        if (!ref.current.humanoid) {
          console.log("No humanoid found");
          return;
        }

        const meydaAnalyzer = initMeyda(analyserNode, (levels) => {
          if (!ref.current.humanoid) {
            console.log("No humanoid found");
            return;
          }
          ref.current.humanoid.updatePhonemeLevels({
            analyserNode,
            phonemeLevels: levels,
          });
        });
        console.log("starting meyda analyzer");

        return () => {
          meydaAnalyzer.stop();
        };
      }, [analyserNode, ref.current, showControls, modelLoaded, path]);

      const modelFormat = path.endsWith(".vrm") ? "vrm" : "gltf";

      return (
        <Stack direction={"row"} {...rest}>
          {ref.current.humanoid && showControls && (
            <Stack>
              {ref.current.humanoid.gltfModel && modelFormat === "gltf" && (
                <MorphControls
                  analyserNode={analyserNode}
                  controls={Object.fromEntries(
                    ref.current.humanoid.gltfModel.getMorphs().map((m) => [
                      m,
                      {
                        min: -2,
                        max: 2,
                      },
                    ])
                  )}
                  defaultValues={{}}
                  onChange={(morphs) => {
                    if (
                      ref.current.humanoid &&
                      ref.current.humanoid.gltfModel
                    ) {
                      ref.current.humanoid.gltfModel.morph(morphs);
                    }
                  }}
                />
              )}
            </Stack>
          )}
          <Canvas
            key={path}
            style={canvasStyle}
            width={canvasWidth}
            height={canvasHeight}
            painter={async (canvas) => {
              const humanoid =
                modelFormat === "gltf"
                  ? await Humanoids.fromGltf({
                      canvas,
                      path: path,
                      cameraOptions: gltfCameraOptions,
                    })
                  : await Humanoids.fromVrm({
                      canvas,
                      vrmUrl: path,
                      cameraOptions: vrmCameraOptions,
                      idleAnimationUrl: animationPath,
                    });
              console.log("humanoid", humanoid);
              console.log("expressions:", humanoid.getExpressions());
              ref.current.humanoid = humanoid;
              console.log("humanoid ref", ref.current.humanoid);
              const anims = Animates.create({
                ticker: (tick) => {
                  humanoid.updateTick({ tick });
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
  )
);
