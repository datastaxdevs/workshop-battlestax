import React from "react";
import { getXKCD } from "../../../api";
import { Grid, Typography } from "@material-ui/core";

export default function Waiting() {
  const [xkcd, setXKCD] = React.useState(null);

  React.useEffect(() => {
    const getComic = async () => {
      const comic = await getXKCD();
      setXKCD(comic);
    };
    getComic();
  }, []);

  if (xkcd && xkcd.img) {
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <Typography paragraph variant="caption">
            Enjoy a random XKCD while you wait!
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          {xkcd && xkcd.img && (
            <img
              alt="xkcd"
              src={xkcd.img}
              style={{ maxWidth: "100%", maxHeight: 600 }}
            />
          )}
        </Grid>
      </React.Fragment>
    );
  }

  return <React.Fragment />;
}
