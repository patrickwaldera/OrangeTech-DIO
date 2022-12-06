import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'
import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground />
        <Content>
            <UserInfo>
                <UserPicture src='https://github.com/patrickwaldera.png' />
                <div>
                    <h4>Pablo Henrique</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito para o curso de html e css no bootcamp DIO do Global avanade... <strong>Saiba mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>
                    #HTML #CSS #JavaScript
                </h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }
