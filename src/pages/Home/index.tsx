import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraPesquisa from '../../containers/BarraPesquisa'
import ListaContatos from '../../containers/ListaContatos'

const Home = () => {
  return (
    <>
      <BarraPesquisa />
      <ListaContatos />
      <BotaoAdicionar />
    </>
  )
}

export default Home
