import React, { useEffect } from "react";
import { createAudioPlayer } from "./createAudioPlayer";

export const useFileAudio = (activate: boolean) => {
  const [state, setState] = React.useState({
    analyserNode: undefined as undefined | AnalyserNode,
    playWavFile: undefined as undefined | ((wavUrl: string) => Promise<void>),
  });
  useEffect(() => {
    if (activate && !state.analyserNode) {
      setTimeout(() => {
        const { analyserNode, playWavFile } = createAudioPlayer();
        setState((s) => ({ ...s, analyserNode, playWavFile }));
      }, 1000);
    }
  }, [activate]);
  return { analyserNode: state.analyserNode, playWavFile: state.playWavFile };
};
