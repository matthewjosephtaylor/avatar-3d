import { Objects, type ModelBuilder } from "@mjtdev/engine";

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
  // const levels = calculateVisemeLevels(analyserNode);
  const dataArray = new Uint8Array(analyserNode.frequencyBinCount);
  analyserNode.getByteTimeDomainData(dataArray);

  const maxAmplitude = Math.max(...dataArray);
  const volume = maxAmplitude / 128.0 - 1.0; // Normalize volume between -1 and 1
  if (volume > 0.3) {
    // vrmState.pickNewExpressionSet("happy");
  }

  // const morphMap = Object.fromEntries(
  //   Object.entries(levels).map(([key, value]) => [key, value + 0.5])
  // );
  // model.morph(morphMap);
};
