import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'

import { ListaContainer, MainContainer, Titulo } from '../../styles'
import { RootReducer } from '../../store'

const ListaContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      return contatosFiltrados
    } else {
      return itens
    }
  }

  const contatos = filtraContatos()
  const mensagem =
    termo !== undefined && termo.length > 0
      ? `Buscando: "${termo}"`
      : `Lista de Contatos`

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ListaContainer>
        <ul>
          {contatos.map((c) => (
            <li key={c.nome}>
              <Contato
                id={c.id}
                nome={c.nome}
                telefone={c.telefone}
                email={c.email}
              />
            </li>
          ))}
        </ul>
      </ListaContainer>
    </MainContainer>
  )
}

export default ListaContatos
