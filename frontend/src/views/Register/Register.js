import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardFooter from "components/Card/CardFooter.js";
import CardHeader from "components/Card/CardHeader.js";
import {UserAuth} from "../../components/User/UserAuth.js";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export  const Register = () => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Register</h4>
      </CardHeader>
      <UserAuth isRegister={true} />
      <CardFooter>
        <Button color="primary">Register</Button>
      </CardFooter>
    </Card>
  );
}
