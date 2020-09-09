import { ThemeProvider, createGlobalStyle } from "styled-components"


function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Background />
      <Component theme={theme} {...pageProps} />
    </ThemeProvider>
    )
}

interface ThemeProps {
  theme: Theme
}

interface Theme {
  primary: string
  background: string
  font: string
}

let theme: Theme = {
  primary: "white",
  background: "black",
  font: `"Trebuchet MS", Helvetica, sans-serif`
}

const Background = createGlobalStyle`
  body {
    background: ${(props: ThemeProps) => props.theme.background};
  }
  /* width */
  ::-webkit-scrollbar {
    width: 0.25em;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 1px grey;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.primary};
    border-radius: 1em;
    opacity: .5;
  }
`


export default App
