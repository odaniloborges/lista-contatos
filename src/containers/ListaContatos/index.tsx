import Contato from '../../components/Contato'
import { MainContainer, Titulo } from '../../styles'

const ListaContatos = () => {
  return (
    <MainContainer>
      <Titulo as="p">Lista de Contatos</Titulo>
      <ul>
        <li>
          <Contato />
        </li>
      </ul>
    </MainContainer>
  )
}

export default ListaContatos
