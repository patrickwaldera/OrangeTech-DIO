import { Link } from 'react-router-dom';
import { Card } from '../../components/Card'
import { UserInfo } from '../../components/UserInfo'
import { Header } from '../../components/Header'

import {
    Container,
    Column,
    Title,
    TitleHighlight
} from './styles'

const Feed = () => {
    return (
        <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo percentual={20} nome="Patrick Waldera" image='https://github.com/patrickwaldera.png'/>
                <UserInfo percentual={60} nome="Patrick Waldera" image='https://github.com/patrickwaldera.png'/>
                <UserInfo percentual={50} nome="Patrick Waldera" image='https://github.com/patrickwaldera.png'/>
                <UserInfo percentual={10} nome="Patrick Waldera" image='https://github.com/patrickwaldera.png'/>
                <UserInfo percentual={70} nome="Patrick Waldera" image='https://github.com/patrickwaldera.png'/>

            </Column>
        </Container>
        </>
    )
}

export { Feed }