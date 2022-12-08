
import { Button } from '../Button'
import logo from '../../assets/logo-dio.png'
import { useNavigate } from 'react-router-dom'

import {
    Container,
    Row,
    Wrapper,
    BuscarInputContainer,
    Menu,
    MenuRight,
    UserPicture,
    Input
} from './styles'
import { IHeader } from './types'

const Header = ({autenticado}: IHeader) => {
  const navigate = useNavigate()

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
                    <MenuRight href='#' onClick={() => navigate('/')}>Home</MenuRight>
                    <Button  onClick={() => navigate('/login')} title="Entrar"/>
                    <Button  onClick={() => navigate('/register')} title="Cadastrar"/>
                </>
            )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }
