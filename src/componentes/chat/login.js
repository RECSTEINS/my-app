import React from 'react';
import { Alert, Button, Form, Row, Col, Stack } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function Login(){
    return(
        <>
            <Form>
                <Row
                style={{
                    height: "100vh",
                    justifyContent: "center",
                    paddingTop: "10%",
                }}
                >
                    <Col xs={6}>
                        <Stack gap={3}>
                            <h2>Iniciar Sesión</h2>

                            <Form.Control type="email" placeholder="Email"/>
                            <Form.Control type="password" placeholder="Password"/>
                            <Button variant="primary" type="submit">
                                Iniciar Sesión
                            </Button>
                        </Stack>
                    </Col>
                </Row>
            </Form>
        </>
    );
};

export default Login;