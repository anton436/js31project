import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function Adminbuttons() {
  return (
    <Box sx={{ "& button": { m: 0.5 } }}>
      <div>
        <Button variant="outlined" size="small">
          Edit
        </Button>
        <Button variant="outlined" size="small">
          Delete
        </Button>
        <Button variant="outlined" size="small">
          Details
        </Button>
      </div>
    </Box>
  );
}
