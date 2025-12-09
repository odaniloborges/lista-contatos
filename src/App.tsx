import { Provider } from 'react-redux'
import BarraPesquisa from './containers/BarraPesquisa'
import ListaContatos from './containers/ListaContatos'
import store from './store'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraPesquisa />
        <ListaContatos />
      </Container>
    </Provider>
  )
}

export default App
