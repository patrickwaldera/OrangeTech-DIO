import { ButtonContainer } from './styles'

const Button = ({label, onClick, color = '#546e7a', flex = 1}) => {
    return (
      <ButtonContainer onClick={onClick} color={color} flex={flex}>
        {label}
      </ButtonContainer>
    );
  }
  
  export { Button };
  