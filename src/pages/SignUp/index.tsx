import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const logoImg = require('../../assets/logoImg.svg');

const SignUp: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="logo" />

      <form>
        <h1>Faça seu cadastro</h1>
        <Input name="name" icon={FiUser} placeholder="Nome" />

        <Input name="email" icon={FiMail} placeholder="E-mail" />

        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="senha"
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      <a href="signup">
        <FiArrowLeft />
        Voltar para o logon
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignUp;
