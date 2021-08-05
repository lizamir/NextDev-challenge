import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import CircularProgress from '@material-ui/core/CircularProgress';


// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import styles from "assets/jss/material-dashboard-react/components/buttonStyle.js";

const useStyles = makeStyles(styles);

export default function RegularButton({
  isLoading = false,
  color,
  round,
  children,
  disabled,
  simple,
  size,
  block,
  link,
  justIcon,
  className,
  muiClasses,
  ...rest
}) {
  const classes = useStyles();
  // const {
  //   isLoading = false,
  //   color,
  //   round,
  //   children,
  //   disabled,
  //   simple,
  //   size,
  //   block,
  //   link,
  //   justIcon,
  //   className,
  //   muiClasses,
  //   ...rest
  // } = props;
  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className
  });
  return (
    <Button disabled={isLoading} {...rest} classes={muiClasses} className={btnClasses}>
      {!isLoading && children}
      {isLoading && <CircularProgress color="secondary" />}
    </Button>
  );
}

RegularButton.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "white",
    "transparent"
  ]),
  size: PropTypes.oneOf(["sm", "lg"]),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  className: PropTypes.string,
  // use this to pass the classes props from Material-UI
  muiClasses: PropTypes.object,
  children: PropTypes.node
};
