import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { Avatar3dGltf } from "./Avatar3dGltf";
import MorphControls from "./debug/morph/MorphControls";
import VisemeLevels from "./debug/viseme/VismeLevels";
import { useMicAudio } from "./useMicAudio";

const FullScreenComponent = () => {
  const [state, setState] = React.useState({
    show: true,
    morphs: [] as string[],
  });
  const analyserNode = useMicAudio(state.show);

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
        <Button
          onClick={() => {
            setState((s) => ({ ...s, show: true }));
          }}
          variant="contained"
          color="primary"
        >
          Start Here
        </Button>
        {/* {state.show && <Avatar3dVrm />} */}
        <Stack
          style={{ overflow: "auto", width: "80vw", height: "80vh" }}
          direction={"row"}
        >
          {state.show && (
            <Stack direction={"row"}>
              <Avatar3dGltf
                analyserNode={analyserNode}
                // onMorphsChanged={(morphs) =>
                //   setState((s) => ({ ...s, morphs }))
                // }
              />
              <VisemeLevels analyserNode={analyserNode} />
            </Stack>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default FullScreenComponent;
