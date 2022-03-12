import { Modal } from './components/Modal'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import theme from './styles/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Modal />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
