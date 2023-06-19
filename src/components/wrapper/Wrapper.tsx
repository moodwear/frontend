import React from "react";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const useStyles = makeStyles(() => ({
  wrapper: {
    maxWidth: "1280px",
    margin: "0 auto",
    width: "100%",
  },
}));

const Wrapper = ({ children }: Props) => {
  const classes = useStyles();
  return <Container className={classes.wrapper}>{children}</Container>;
};

export default Wrapper;
