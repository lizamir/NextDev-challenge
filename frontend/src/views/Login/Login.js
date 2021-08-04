import React, { useState } from "react";
import CustomInput from "components/CustomInput/CustomInput.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CardBody from "components/Card/CardBody.js";
import Card from "components/Card/Card";
import CardFooter from "components/Card/CardFooter";
import Button from "components/CustomButtons/Button.js";

export  const Login= () =>{

  const [fields, setFields] = useState({ username: '', password: '' });

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFields({ ...fields, [name]: value });
    console.log(ev.target);
  };
  return (
    <Card>
      <CardBody>
        <GridContainer>
          <GridItem xs={2} sm={12} md={6}>
            <CustomInput
              labelText="Username"
              name="username"
              value={fields.username}
              onChange={handleChange}
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <CustomInput
              labelText="Password"
              value={fields.passWord}
              onChange={handleChange}
              name="password"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
        </GridContainer>
      </CardBody>
      <CardFooter>
            <Button color="primary">Login</Button>
          </CardFooter>
    </Card>
  );
}
