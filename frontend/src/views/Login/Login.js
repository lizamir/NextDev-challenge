import React, { useState } from "react";
import CustomInput from "components/CustomInput/CustomInput.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CardBody from "components/Card/CardBody.js";
import Card from "components/Card/Card";
import CardFooter from "components/Card/CardFooter";
import Button from "components/CustomButtons/Button.js";
import { useDispatch, useSelector } from "react-redux";
import { login } from "store/actions/userActions";
import { useHistory } from "react-router-dom";
import { logout } from "store/actions/userActions";

export const Login = () => {

  const dispatch = useDispatch()
  const history = useHistory()

  const user = useSelector(rootReducer => rootReducer.userReducer.user)

  const [fields, setFields] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false)

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true)
    dispatch(login(fields.username, fields.password)).then(() => history.push('/dashboard')).catch(setLoading(false))
  }

  return (
    <Card>
      {user && <p>You are already logged in!</p>}
      {!user && <CardBody>
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
      </CardBody>}
      <CardFooter>

        {user && <Button color="danger" onClick={() => dispatch(logout())} isLoading={loading}>Logout</Button>}
        {!user && <Button color="primary" onClick={handleSubmit} isLoading={loading}>Login</Button>}
      </CardFooter>
    </Card>
  );
}
