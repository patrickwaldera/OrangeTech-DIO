import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { MdAccountCircle, MdEmail, MdLock } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { api } from '../../services/api'
import {
    Container,
    Column,
    Title,
    Wrapper,
    TitleLogin,
    SubTitleLogin,
    Row,
    WithAccount,
    FazerLogin
    
} from './styles'
import { IFormData } from './types'
import { useForm } from 'react-hook-form'

const schema = yup.object({
    name: yup.string().min(5, 'No mínimo 5 caracteres').required('Campo obrigatório'),
    email: yup.string().email('Email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required(),
  }).required('Campo obrigatório');


const Register = () => {
    const navigate = useNavigate();
    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onSubmit = async (formData: IFormData) => 
    {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            if(data.length === 1) {
                navigate('/feed')
            }
            else {
                alert('Email ou senha inválidos!')
            }
        }
        catch {
            alert('Houve um erro!')
        }
    };
    return (
    <>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
            <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="name" errorMessage={errors?.name?.message}
                            control={control} placeholder="Nome completo" leftIcon={<MdAccountCircle />}/>
                        <Input name="email" errorMessage={errors?.email?.message}
                        control={control} placeholder="E-mail" leftIcon={<MdEmail />}/>
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                        <Button title="Entrar" variant="secondary" type="submit"/>
                        
                    </form>
                    <Row>
                        <WithAccount>
                            Já tenho conta.
                            <FazerLogin href='#' onClick={() => navigate('/login')}> Fazer Login</FazerLogin>
                        </WithAccount>
                    </Row>    

                </Wrapper>
            </Column>
        </Container>
    </>
  )
}

export { Register }