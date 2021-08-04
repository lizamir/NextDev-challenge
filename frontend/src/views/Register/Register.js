import React, { useState  } from "react";
import {useDispatch} from 'react-redux'
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardFooter from "components/Card/CardFooter.js";
import CardHeader from "components/Card/CardHeader.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import InputLabel from "@material-ui/core/InputLabel";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CardBody from "components/Card/CardBody.js";
import { getEmptyForm } from "../../services/user.service"
import {signup} from "../../store/actions/userActions.js"

// import {UserAuth} from "../../components/User/UserAuth.js";

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

  const dispatch = useDispatch()
  const [fields, setFields] = useState( getEmptyForm())


  const handleChange = (ev) => {
      const { name, value } = ev.target
      setFields({ ...fields, [name]: value })
      console.log(ev.target);
  }

  const handleSubmit= async ()=>{
    dispatch(signup(fields))
    console.log(fields);


  }
  

  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Register</h4>
      </CardHeader>
        <form onSubmit={handleSubmit}>
      <CardBody>
            <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                        labelText="Company"
                        name="company"
                        value={fields.company}
                        onChange={handleChange}
                        formControlProps={{
                            fullWidth: true
                        }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                        labelText="Username"
                        name="username"
                        value={fields.username}
                        onChange={handleChange}
                        formControlProps={{
                            fullWidth: true
                        }}
                    />
                </GridItem>
              
                    <GridItem xs={12} sm={12} md={4}>
                        <CustomInput
                            labelText="Password"
                            value={fields.passWord}
                            onChange={handleChange}
                            name="password"
                            formControlProps={{
                                fullWidth: true
                            }}
                        />
                    </GridItem>
                
            </GridContainer>
            <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                        labelText="Email address"
                        name="email"
                        value={fields.email}
                        onChange={handleChange}
                        formControlProps={{
                            fullWidth: true
                        }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                        labelText="First Name"
                        name="firstName"
                        value={fields.firstName}
                        onChange={handleChange}
                        formControlProps={{
                            fullWidth: true
                        }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                        labelText="Last Name"
                        value={fields.lastName}
                        onChange={handleChange}
                        name="lastName"
                        formControlProps={{
                            fullWidth: true
                        }}
                    />
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                        labelText="City"
                        value={fields.city}
                        onChange={handleChange}
                        name="city"
                        formControlProps={{
                            fullWidth: true
                        }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                        labelText="Country"
                        value={fields.country}
                        onChange={handleChange}
                        name="country"
                        formControlProps={{
                            fullWidth: true
                        }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                        labelText="Postal Code"
                        value={fields.postalCode}
                        onChange={handleChange}
                        name="postalCode"
                        formControlProps={{
                            fullWidth: true
                        }}
                    />
                </GridItem>
            </GridContainer>
            
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                    <CustomInput
                        value={fields.about}
                        name="about"
                        onChange={handleChange}
                        formControlProps={{
                            fullWidth: true
                        }}
                        inputProps={{
                            multiline: true,
                            rows: 5
                        }}
                    />
                </GridItem>
            </GridContainer>
        </CardBody>
            </form>
      <CardFooter>
        <Button onClick={handleSubmit} color="primary">Register</Button>
      </CardFooter>
    </Card>
  );
}
