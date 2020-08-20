import styled, { ThemeProvider, createGlobalStyle } from "styled-components"


function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Background />
      <Component {...pageProps} />
    </ThemeProvider>
    )
}

interface ThemeProps {
  theme: Theme
}

interface Theme {
  primary: string
  background: string
}

const theme: Theme = {
  primary: "orange",
  background: "black"
}

const Background = createGlobalStyle`
  body {
    background: ${(props: ThemeProps) => props.theme.background};
  }
    
  
  
`


export default App
