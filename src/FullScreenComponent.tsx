import {
  Box,
  Button,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React, { useRef } from "react";
import { Avatar3d, type Avatar3dRef } from "./Avatar3d";
import { useFileAudio } from "./useFileAudio";
import { useMicAudio } from "./useMicAudio";

const FullScreenComponent = () => {
  const [state, setState] = React.useState({
    show: true,
    morphs: [] as string[],
    path: " ./fem.vrm",
  });
  const micAnalyserNode = useMicAudio(state.show);
  const { analyserNode: fileAnalyserNode, playWavFile } = useFileAudio(
    state.show
  );
  const ref = useRef<Avatar3dRef>(null);

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
          <Button
            onClick={() => {
              ref.current?.getHumanoid()?.setAnimation("./Idle_2.fbx");
            }}
          >
            Start Idle Animation
          </Button>
          <Button
            onClick={() => {
              ref.current?.getHumanoid()?.setAnimation("./Samba Dancing.fbx");
            }}
          >
            Start Dance Animation
          </Button>

          <ToggleButtonGroup
            value={state.path === "./fem.vrm" ? "vrm" : "gltf"}
            exclusive
            aria-label="mode selection"
          >
            <ToggleButton
              onClick={() => {
                setState((s) => ({ ...s, path: "./fem.vrm" }));
              }}
              value="vrm"
              aria-label="vrm mode"
            >
              VRM Example
            </ToggleButton>
            <ToggleButton
              onClick={() => {
                setState((s) => ({ ...s, path: "./female8-clothed5.glb" }));
              }}
              value="gltf"
              aria-label="gltf mode"
            >
              GLTF Example
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        <TextField
          label="3D Model Path"
          multiline
          fullWidth
          value={state.path}
          onChange={(event) => {
            setState((s) => ({ ...s, path: event.target.value }));
          }}
          variant="outlined"
          margin="normal"
        />
        <Stack
          style={{ overflow: "auto", width: "80vw", height: "80vh" }}
          direction={"row"}
        >
          {state.show && (
            <Stack direction={"row"}>
              <Avatar3d
                ref={ref}
                key={state.path}
                showControls={true}
                showPhonemes={true}
                analyserNode={fileAnalyserNode}
                canvasWidth={400}
                canvasHeight={400}
                vrmCameraOptions={{
                  frustumSize: 1,
                  lookAt: [0, 1.7, 0],
                  position: [0, 1.7, 2],
                }}
                animationPath="./Idle_2.fbx"
                path={state.path}
              />
            </Stack>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default FullScreenComponent;
