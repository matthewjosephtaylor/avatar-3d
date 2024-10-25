import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { Avatar3dGltf } from "./Avatar3dGltf";
import { useFileAudio } from "./useFileAudio";
import { useMicAudio } from "./useMicAudio";

const FullScreenComponent = () => {
  const [state, setState] = React.useState({
    show: true,
    morphs: [] as string[],
  });
  const micAnalyserNode = useMicAudio(state.show);
  const { analyserNode: fileAnalyserNode, playWavFile } = useFileAudio(
    state.show
  );

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack>
        <h1>3D Avatar Demo</h1>
        <Stack direction={"row"}>
          <Button
            onClick={() => {
              setState((s) => ({ ...s, show: true }));
            }}
          >
            Start Here
          </Button>
          <Button
            onClick={() => {
              playWavFile?.("agent-audio-test1.wav");
            }}
          >
            Play Audio File
          </Button>
        </Stack>
        {/* {state.show && <Avatar3dVrm />} */}
        <Stack
          style={{ overflow: "auto", width: "80vw", height: "80vh" }}
          direction={"row"}
        >
          {state.show && (
            <Stack direction={"row"}>
              <Avatar3dGltf
                showControls={true}
                showPhonemes={true}
                analyserNode={fileAnalyserNode}
                // url={"./female8-walk-pose.glb"}
                path={"./female8-clothed5.glb"}
              />
            </Stack>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default FullScreenComponent;
