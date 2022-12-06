import { Input } from './components/Input'
import { Button } from './components/Button'

import { Container, Content, NumbersAndOp, Row } from './styles'
import { useState } from 'react'

const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  const handleSumNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('+')
    }
    else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMinusNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('-')
    }
    else {
      const minus = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(minus))
      setOperation('')
    }
  }

  const handleMultipliNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('x')
    }
    else {
      const minus = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(minus))
      setOperation('')
    }
  }

  const handleDiviNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('/')
    }
    else {
      if (currentNumber === '0')
      {
        return setCurrentNumber('ERRO!')
      }
      const minus = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(minus))
      setOperation('')
    }
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== 0) {
      switch(operation){
        case '+':
          handleSumNumbers()
          break
        case '-':
          handleMinusNumbers()
          break
        case 'x':
          handleMultipliNumbers()
          break
        case '/':
          handleDiviNumbers()
          break
        default: break
      }
    }
  }

  return (
    <Container>
      <h1>Calculadora</h1>
      <Content>
        <Input value={currentNumber} />
        <NumbersAndOp>
          <Row>
            <Button label="C" flex={2.8} onClick={handleOnClear}/> 
            <Button label="%" color='#263238' onClick={() => handleAddNumber('')}/>  
            <Button label="÷" color='#263238' onClick={handleDiviNumbers}/>   
          </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber('7')}/>  
            <Button label="8" onClick={() => handleAddNumber('8')}/>  
            <Button label="9" onClick={() => handleAddNumber('9')}/>
            <Button label="x" color='#263238' onClick={handleMultipliNumbers}/>
              
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber('4')}/>  
            <Button label="5" onClick={() => handleAddNumber('5')}/>  
            <Button label="6" onClick={() => handleAddNumber('6')}/>
            <Button label="-" color='#263238' onClick={handleMinusNumbers}/>
              
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber('1')}/>  
            <Button label="2" onClick={() => handleAddNumber('2')}/>  
            <Button label="3" onClick={() => handleAddNumber('3')}/>
            <Button label="+" color='#263238' onClick={handleSumNumbers}/> 
          </Row>
          <Row>
            <Button label="0" flex={2.8} onClick={() => handleAddNumber('0')}/>  
            <Button label="," onClick={() => handleAddNumber('.')}/>  
            <Button label="=" color='#ff8a65' onClick={handleEquals}/>  
          </Row>
        </NumbersAndOp>
      </Content>
    </Container>
  );
}

export { App };
