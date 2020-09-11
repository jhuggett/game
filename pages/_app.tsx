import { ThemeProvider, createGlobalStyle } from "styled-components"
import { useRef, useState, useEffect } from "react"
import { ThemeHandler, Theme } from "Theme"


function App({ Component, pageProps }) {
  const [theme, setTheme] = useState<Theme>(initialTheme)
  const themeHandler = useRef(new ThemeHandler(setTheme))

  useEffect(() => {
    themeHandler.current.loadTheme(initialTheme)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Background />
      <Component themeHandler={themeHandler} {...pageProps} />
    </ThemeProvider>
    )
}

const initialTheme: Theme = {
  primary: "white",
  background: "black",
  font: `"Trebuchet MS", Helvetica, sans-serif`
}

interface ThemeProps {
  theme: Theme
}

const Background = createGlobalStyle`
  body {
    background: ${(props: ThemeProps) => props.theme.background};
    overflow: hidden;
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
