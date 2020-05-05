import React from 'react';
import { useState } from 'react'
import {
  Container,
  Form,
  Label,
  Input,
  InputContainer,
  Button
} from './style'

function App() {
  const [bin, setBin]  = useState('');
  const [hex, setHex] = useState('');
  const [dec, setDec] = useState('');
  const re = RegExp('^[0-1]+$', 'g');

  function handleChange(e) {
    e.preventDefault();
    
    if (!re.test(bin))
      return alert("Error, number not 0 or 1");
    else
      setDec(parseInt(bin, 2).toString(10));
      setHex(parseInt(bin, 2).toString(16).toUpperCase());
  }

  return (
    <>
    <Container>
      <h1>Bin 2 Dec/Hex</h1>
      <Form onSubmit={handleChange}>
        <InputContainer>
          <Label>Bin: <span>(max length: 8)</span></Label>
          <Input 
            name="bin"  
            placeholder="Insert Bin"
            maxLength="8"
            onChange={e => setBin(e.target.value)}
            autoComplete="off"
            />

            <Button type="submit">Submit</Button>
        </InputContainer>

        <InputContainer>
          <Label>Hex:</Label>
          <Input name="hex" value={hex} disabled/>
        </InputContainer>

        <InputContainer>
          <Label>Decimal:</Label>
          <Input name="decimal" value={dec} disabled/>
        </InputContainer>
      </Form>
    </Container>
    </>
  );
}

export default App;
