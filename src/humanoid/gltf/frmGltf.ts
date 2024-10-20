import { Babs } from "@mjtdev/engine";

export const fromGltf = ({
  gltfUrl,
  canvas,
  analyserNode,
  idleAnimationUrl,
}: {
  gltfUrl: string;
  canvas: HTMLCanvasElement;
  analyserNode?: AnalyserNode;
  idleAnimationUrl?: string;
}) => {
  const engine = Babs.createEngine({ canvas });

  const hw = Babs.helloWorld(engine);
};
