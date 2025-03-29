import type { ModelBuilder } from "@mjt-engine/babs";
import type { VRM } from "@pixiv/three-vrm/types/VRM";
import type { PhonemeLevels } from "../audio/calculateVisemeLevels";
import type { Tick } from "@mjt-engine/animate";

export type Humanoid = {
  destroy: () => void;
  gltfModel?: ModelBuilder;
  vrmModel?: VRM;
  updateTick: (params: { tick: Tick }) => void;
  updatePhonemeLevels: (params: {
    analyserNode: AnalyserNode;
    phonemeLevels: PhonemeLevels;
  }) => void;
  setExpression: (expression: string, value?: number) => void;
  setAnimation: (animation: string) => void;
  getExpressions: () => string[];
};
