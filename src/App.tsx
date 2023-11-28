import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Transactions } from './pages/Transactions'
import { TransactionsContextProvinder } from './contexts/TransactionsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsContextProvinder>
        <GlobalStyle />
        <Transactions />
      </TransactionsContextProvinder>
    </ThemeProvider>
  )
}
