import { useEffect } from "react";
import { getMicAudio } from "./getMicAudio";
import React from "react";

export const useMicAudio = (activate: boolean) => {
  const [state, setState] = React.useState({
    analyserNode: undefined as undefined | AnalyserNode,
  });
  useEffect(() => {
    if (activate && !state.analyserNode) {
      getMicAudio().then(({ analyserNode }) => {
        setState((s) => ({ ...s, analyserNode }));
      });
    }
  }, [activate]);
  return state.analyserNode;
};
