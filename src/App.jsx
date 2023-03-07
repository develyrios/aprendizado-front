import { Exercicios } from './components/Exercicios'
import { Header } from './components/Header'
import GlobalStyle from './styles/GlobalStyle'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Exercicios />
    </>
  )
}
