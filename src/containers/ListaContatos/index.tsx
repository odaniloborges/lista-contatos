import Contato from '../../components/Contato'

import { MainContainer, Titulo } from '../../styles'

const contatos = [
  {
    id: 1,
    nome: 'Jai Barcellos',
    telefone: '+119543432541',
    email: 'jai@gmail.com'
  },
  {
    id: 2,
    nome: 'Jai Barcellos',
    telefone: '+119543432541',
    email: 'jai@gmail.com'
  },
  {
    id: 3,
    nome: 'Jai Barcellos',
    telefone: '+119543432541',
    email: 'jai@gmail.com'
  }
]

const ListaContatos = () => {
  return (
    <MainContainer>
      <Titulo as="p">Lista de Contatos</Titulo>
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
    </MainContainer>
  )
}

export default ListaContatos
