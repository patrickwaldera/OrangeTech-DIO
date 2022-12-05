import React from 'react'
import { Button } from '../Button'
import logo from '../../assets/logo-dio.png'

import {
    Container,
    Row,
    Column,
    Wrapper,
    BuscarInputContainer,
    Menu,
    MenuRight,
    UserPicture,
    Input
} from './styles'

const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo DIO"/>
                {autenticado ? (
                    <>
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...'/>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
            </Row>
            <Row>
            {autenticado ? (
                <>
                    <UserPicture src="https://github.com/patrickwaldera.png"/>
                </>
            ) : (
                <>
                    <MenuRight href='#'>Home</MenuRight>
                    <Button title="Entrar"/>
                    <Button title="Cadastrar"/>
                </>
            )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }
