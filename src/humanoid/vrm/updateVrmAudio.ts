import type { VRM } from "@pixiv/three-vrm";
// import { calculateVisemeLevels } from "../audio/calculateVisemeLevels";
import type { VrmState } from "./vrmState";
import type { PhonemeLevels } from "../audio/calculateVisemeLevels";

export const updateVrmAudio = ({
  vrm,
  analyserNode,
  vrmState,
  levels,
}: {
  vrm: VRM;
  analyserNode?: AnalyserNode;
  vrmState: VrmState;
  levels: PhonemeLevels;
}) => {
  if (!analyserNode) {
    return;
  }
  // const levels = calculateVisemeLevels(analyserNode);
  const dataArray = new Uint8Array(analyserNode.frequencyBinCount);
  analyserNode.getByteTimeDomainData(dataArray);

  // Check if the waveform data is non-zero
  const maxAmplitude = Math.max(...dataArray);
  const volume = maxAmplitude / 128.0 - 1.0; // Normalize volume between -1 and 1
  if (volume > 0.3) {
    vrmState.pickNewExpressionSet("happy");
  }

  // console.log("Waveform amplitude:", maxAmplitude);
  // console.log("Calculated volume:", volume);
  if (vrm.expressionManager) {
    for (const [key, value] of Object.entries(levels)) {
      vrm.expressionManager.setValue(key.toLocaleLowerCase(), value * 0.15);
    }
  }
};
