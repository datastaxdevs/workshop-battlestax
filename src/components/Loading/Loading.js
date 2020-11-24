import React from "react";
import { Grid, LinearProgress } from "@material-ui/core";

export default function Loading() {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      className="loading-root"
    >
      <div style={{ width: 64 }}>
        <LinearProgress />
      </div>
    </Grid>
  );
}
