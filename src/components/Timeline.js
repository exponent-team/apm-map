import React from "react";
import Box from "@material-ui/core/Container";
import Container from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import Trail from "./Trail";
import MapPin from "./MapPin";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#e4e4d9",
  },
  box: {
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      padding: theme.spacing(4, 2, 4),
    },
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(4, 2, 4),
    },
  },
}));

export default function Timeline() {
  const classes = useStyles();

  return (
    <Container disableGutters maxWidth="lg" className={classes.container}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={classes.box}
      >
        <Trail />
      </Box>
    </Container>
  );
}
