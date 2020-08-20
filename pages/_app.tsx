import styled, { ThemeProvider, createGlobalStyle } from "styled-components"


function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Background />
      <Component {...pageProps} />
    </ThemeProvider>
    )
}

const theme = {
  primary: "orange",

  background: "black"
}

const Background = createGlobalStyle`
  body {
    background: ${props => props.theme.background};
  }
    
  
  
`


export default App
