import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

import { AppContext } from "../../Context/Context";
import { credtentials } from "../../utils/cred";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState({ error: false, errorMsg: "" });
  const history = useHistory();
  const context = useContext(AppContext);

  useEffect(() => {
    if (context.loginStatus()) {
      history.push("/protected-dashboard");
    }
    return () => {};
  }, []);

  const onChangeHandler = (e) => {
    const { id, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { email, password } = user;
    if (email && password) {
      if (
        email.toLocaleLowerCase() === credtentials.email &&
        password === credtentials.password
      ) {
        context.login(email, () => {
          history.push("/protected-dashboard");
        });
      } else {
        setError((prevState) => ({
          ...prevState,
          error: true,
          errorMsg: "Invalid credentials",
        }));
      }
    } else {
      setError((prevState) => ({
        ...prevState,
        error: true,
        errorMsg: "Both field required",
      }));
    }
  };

  return (
    <Container fluid className='login-form-container'>
      <div className='login-form'>
        <Row className=''>
          <Col lg={12} md={12} sm={12} xs={12} className='mb-3'>
            <h3 id='heading'>Sign In</h3>
          </Col>
          <Form onSubmit={onSubmitHandler} noValidate>
            <Col lg={12} md={12} sm={12} xs={12} className='mb-3'>
              <Form.Group>
                <Form.Control
                  type='email'
                  placeholder='Email'
                  value={user.email}
                  onChange={onChangeHandler}
                  id='email'
                  required
                  className={`${error.error ? "is-invalid" : ""}`}
                />
              </Form.Group>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12} className='mb-3'>
              <Form.Group>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  value={user.password}
                  onChange={onChangeHandler}
                  id='password'
                  required
                  className={`${error.error ? "is-invalid" : ""}`}
                />
                <Form.Control.Feedback
                  type='invalid'
                  className='text-end small-font-size'
                >
                  {error.errorMsg}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col className='mb-3' lg={12} md={12} sm={12} xs={12}>
              <Button type='submit' variant='success' className='w-100'>
                Sign In
              </Button>
            </Col>
          </Form>
        </Row>
      </div>
    </Container>
  );
};

export default Login;
