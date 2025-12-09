import BarraPesquisa from './containers/BarraPesquisa'
import ListaContatos from './containers/ListaContatos'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraPesquisa />
        <ListaContatos />
      </Container>
    </>
  )
}

export default App
