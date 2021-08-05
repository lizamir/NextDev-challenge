import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
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
import { userService } from "../../services/user.service"
import { logout, signup } from "../../store/actions/userActions.js"
import { useHistory } from "react-router-dom";


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

export const Register = () => {
    const classes = useStyles();
    const history = useHistory()
    const dispatch = useDispatch()
    const user = useSelector(rootReducer => rootReducer.userReducer.user)
    const [loading, setLoading] = useState(false)
    const [fields, setFields] = useState({
        company: "",
        username: "",
        password: "",
        email: "",
        firstName: "",
        lastName: "",
        city: "",
        country: "",
        postalCode: "",
        about: ""
    });



    const handleChange = (ev) => {
        const { name, value } = ev.target;
        setFields({ ...fields, [name]: value });
    };

    const handleSubmit = () => {
        setLoading(true)
        dispatch(signup(fields)).then(() => history.push('/dashboard')).catch(setLoading(false))
    }


    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
                    <Card>

                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Register</h4>
                            <p className={classes.cardCategoryWhite}>Complete your profile</p>
                        </CardHeader>
                        {user && <p>You are already logged in!</p>}
                        {!user && <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={5}>
                                    <CustomInput
                                        labelText="Company"
                                        id="company"
                                        name="company"
                                        onChange={handleChange}
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            value: fields.company
                                        }}

                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3}>
                                    <CustomInput
                                        onChange={handleChange}
                                        labelText="Username"
                                        id="username"
                                        name="username"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{

                                            value: fields.username
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Password"
                                        onChange={handleChange}
                                        id="password"
                                        name="password"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            value: fields.password

                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                    <CustomInput
                                        onChange={handleChange}
                                        labelText="Email address"
                                        id="email-address"
                                        name="email"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            value: fields.email

                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        onChange={handleChange}
                                        labelText="First Name"
                                        id="first-name"
                                        name="firstName"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            value: fields.firstName

                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        onChange={handleChange}
                                        labelText="Last Name"
                                        id="last-name"
                                        name="lastName"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            value: fields.lastName
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={4}>
                                    <CustomInput
                                        name="city"
                                        onChange={handleChange}
                                        labelText="City"
                                        id="city"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            value: fields.city
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                    <CustomInput
                                        name="country"
                                        onChange={handleChange}
                                        labelText="Country"
                                        id="country"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            value: fields.country
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                    <CustomInput
                                        name="postalCode"
                                        onChange={handleChange}
                                        labelText="Postal Code"
                                        id="postal-code"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            value: fields.postalCode
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                                    <CustomInput
                                        onChange={handleChange}
                                        name="about"
                                        labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                                        id="about-me"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            multiline: true,
                                            rows: 5,
                                            value: fields.about
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                        </CardBody>}
                        <CardFooter>
                            {user && <Button color="danger" onClick={() => dispatch(logout())} isLoading={loading}>Logout</Button>}
                            {!user && <Button color="primary" onClick={handleSubmit} isLoading={loading}>Register</Button>}
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        </div >
    );
}
