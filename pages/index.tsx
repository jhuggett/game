import styled, { keyframes } from 'styled-components'
import { useState, useEffect } from 'react'
import { getRandomItem, getRandomBool, getRandomNumber } from 'utils'
import { SelectList } from 'components'

export default function Home() {

  const [inputs, setInputs] = useState<string[]>([
    "1",
    "2",
    "3"
  ])

  const [output, setOutput] = useState<string>('')
  const [input, setInput] = useState<number | null>(null)

  useEffect(() => {
    console.log(input);
    if (typeof(input) == 'number') setOutput(inputs[input])
    setInput(null)
    setInputs([`${getRandomNumber(0, 10)}`])
  }, [input])

  return (
    <>
      <Header></Header>
      <Body>
        <Output>
          {output}
        </Output>
        <Input>
          <SelectList inputs={inputs} setChosen={setInput} />
        </Input>
      </Body>
      <Footer></Footer>
    </>
  )
}

const Header = styled.div`
  height: 20px;
`

const Body = styled.div`
  padding: 50px 50px 50px 50px;
`

const Footer = styled.div``

const Output = styled.div`
  color: ${props => props.theme.primary};
  text-align: center;
`

const Input = styled.div`
  color: ${props => props.theme.primary};
  text-align: center;
  padding-top: 5em;
`