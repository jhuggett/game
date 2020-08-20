import styled, { keyframes } from 'styled-components'
import { useState, useEffect } from 'react'

export default function Home() {

  const [currDate, setCurrDate] = useState((new Date()).toLocaleTimeString())
  const [color, setColor] = useState<string | null>(null)

  useEffect(() => {
    const onKeyDown = ({ key }) => {
      switch(key) {
        case "r": {
          setColor("red")
          break
        }
        case "b": {
          setColor("blue")
          break
        }
        case "g": {
          setColor("green")
          break
        }
      }
    }

    const onKeyUp = ({ key }) => {
      setColor("white")
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('keyup', onKeyUp)

    const interval = setInterval(() => {
      setCurrDate((new Date()).toLocaleTimeString())
    }, 950)
    return () => {
      clearInterval(interval)
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('keyup', onKeyUp)
    }
  }, [])

  return (
    <>
      <Title color={color}>
        {currDate}
      </Title>
    </>
  )
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Title = styled.h1`
  
  font-size: 1.5em;
  text-align: center;
  color: ${props => props.color || props.theme.primary};
  margin-top: 5em;
`