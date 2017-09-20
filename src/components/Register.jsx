import React from 'react';
import { Card, CardTitle, CardText, Button, Form, FormGroup, Input, Label } from 'reactstrap';

const Register = () => (
  <div className="container d-flex justify-content-center mt-3" style={{ maxWidth: '400px' }}>
    <Card block>
      <CardTitle>Registrar</CardTitle>
      <CardText>
        <Form>
          <FormGroup>
            <Label for="exampleUsername">Nome de usuário</Label>
            <Input type="text" name="username" placeholder="Escolha um nome de usuário" />
          </FormGroup>
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
      <Button color="primary">Cadastrar</Button>
    </Card>
  </div>
);

export default Register;
