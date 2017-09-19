import React from 'react';
import { Card, CardTitle, CardText, Button, Form, FormGroup, Input, Label } from 'reactstrap';

const Register = () => (
  <div className="container w-25 mt-3">
    <Card block inverse color="primary">
      <CardTitle>Registrar</CardTitle>
      <CardText>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">E-mail</Label>
            <Input type="email" name="email" placeholder="Digite seu e-mail" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Senha</Label>
            <Input type="password" name="password" placeholder="Digite sua senha" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Confirme sua senha</Label>
            <Input type="password" name="password" placeholder="Digite novamente sua senha" />
          </FormGroup>
        </Form>
      </CardText>
      <Button color="secondary">Cadastrar</Button>
    </Card>
  </div>
);

export default Register;
