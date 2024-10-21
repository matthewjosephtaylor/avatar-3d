import React from "react";
import { Box, Button, Stack } from "@mui/material";
import { Avatar3dVrm } from "./Avatar3dVrm";
import { Avatar3dGltf } from "./Avatar3dGltf";

const FullScreenComponent = () => {
  const [state, setState] = React.useState({ show: true });
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
            setState((s) => ({ ...s, show: false}));
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
          {state.show && <Avatar3dGltf />}
        </Stack>
      </Stack>
    </Box>
  );
};

export default FullScreenComponent;
