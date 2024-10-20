import { useEffect, useRef } from "react";
import type { VRM } from "@pixiv/three-vrm";

export const useAudioInput = (
  vrm: VRM | null | undefined,
  analyserNode: AnalyserNode | null
) => {
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const processAudio = () => {
      if (!analyserNode) {
        console.warn("No analyser node available for processing");
        return;
      }

      if (!vrm) {
        console.warn("No VRM model available for audio processing");
        return;
      }

      // Use getByteTimeDomainData to check if any waveform data is captured
      const dataArray = new Uint8Array(analyserNode.frequencyBinCount);
      analyserNode.getByteTimeDomainData(dataArray);

      // Check if the waveform data is non-zero
      const maxAmplitude = Math.max(...dataArray);
      const volume = maxAmplitude / 128.0 - 1.0; // Normalize volume between -1 and 1

      // console.log("Waveform amplitude:", maxAmplitude);
      // console.log("Calculated volume:", volume);

      if (vrm.expressionManager) {
        vrm.expressionManager.setValue("oh", volume);
        vrm.expressionManager.setValue("aa", volume);
        // console.log("Updated VRM expressions with volume");
      }

      animationFrameRef.current = requestAnimationFrame(processAudio);
    };

    animationFrameRef.current = requestAnimationFrame(processAudio);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        console.log("Audio processing stopped");
      }
    };
  }, [analyserNode, vrm]);
};
