import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthForm } from "./Auth.components";

const LoginPage = () => {
  const [{ email, password }, setCredentials] = useState({
    email: "",
    password: "",
  });

  return (
    <AuthForm>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) =>
            setCredentials({
              email: event.target.value,
              password,
            })
          }
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) =>
            setCredentials({
              email,
              password: event.target.value,
            })
          }
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </AuthForm>
  );
};

export default LoginPage;
