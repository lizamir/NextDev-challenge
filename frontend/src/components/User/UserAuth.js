
import React, { useState } from "react";
import CustomInput from "components/CustomInput/CustomInput.js";
import InputLabel from "@material-ui/core/InputLabel";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CardBody from "components/Card/CardBody.js";
import { getEmptyForm } from "../../services/user.service"


export const UserAuth = ({ isRegister, user }) => {

    const [fields, setFields] = useState(isRegister ? getEmptyForm() : user)


    const handleChange = (ev) => {
        const { name, value } = ev.target
        setFields({ ...fields, [name]: value })
        console.log(ev.target);
    }
    

    return (
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
                {isRegister && (
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
                )}
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
    );

}