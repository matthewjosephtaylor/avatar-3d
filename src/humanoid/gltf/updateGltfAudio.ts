import { Objects, type ModelBuilder } from "@mjtdev/engine";
import { calculateVisemeLevels } from "../audio/calculateVisemeLevels";

export const updateGltfAudio = ({
  analyserNode,
  model,
}: {
  analyserNode?: AnalyserNode;
  model: ModelBuilder;
}) => {
  if (!analyserNode) {
    return;
  }
  const levels = calculateVisemeLevels(analyserNode);
  const dataArray = new Uint8Array(analyserNode.frequencyBinCount);
  analyserNode.getByteTimeDomainData(dataArray);

  // const morphs = model.getMorphs();
  // Check if the waveform data is non-zero
  const maxAmplitude = Math.max(...dataArray);
  const volume = maxAmplitude / 128.0 - 1.0; // Normalize volume between -1 and 1
  if (volume > 0.3) {
    // vrmState.pickNewExpressionSet("happy");
  }

  // const morphMap = Objects.fromEntries(morphs.map((m) => [m, volume]));
  const morphMap = Object.fromEntries(
    Object.entries(levels).map(([key, value]) => [key, value + 0.5])
  );
  // model.addMorphRemaps({
  //   // aa: ["eCTRLvAA"],
  //   // ee: ["eCTRLvEE"],
  //   // ih: ["eCTRLvIH"],
  // });
  // console.log("aa", levels.aa);
  // model.morph(levels);
  // const test = { aa: levels.aa };
  // const test = { ee: levels.ee };
  // const test = { ih: levels.ih} as const;
  // console.log("test", test.ih);
  model.morph(morphMap);

  // console.log("Waveform amplitude:", maxAmplitude);
  // console.log("Calculated volume:", volume);
  // if (vrm.expressionManager) {
  //   for (const [key, value] of Object.entries(levels)) {
  //     vrm.expressionManager.setValue(key, value * 3);
  //   }
  // }
};
