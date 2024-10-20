import React from "react";
import { Box, Button, Stack } from "@mui/material";
import { Avatar3d } from "./Avatar3d";

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
            setState((s) => ({ ...s, show: true }));
          }}
          variant="contained"
          color="primary"
        >
          Start Here
        </Button>
        {state.show && <Avatar3d />}
      </Stack>
    </Box>
  );
};

export default FullScreenComponent;
