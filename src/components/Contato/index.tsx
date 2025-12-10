import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Botao, BotaoCancelar, BotaoRemover, BotaoSalvar } from '../../styles'
import * as S from './styles'
import ContatoClass from '../../models/Contato'
import { editar, remover } from '../../store/reducers/contatos'

type Props = ContatoClass

const Contato = ({
  nome,
  telefone: telefoneOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [telefoneOriginal])

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setTelefone(telefoneOriginal)
    setEmail(emailOriginal)
  }

  return (
    <S.Card>
      <S.Nome>
        {estaEditando && <em>Editando: </em>}
        {nome}
      </S.Nome>
      <S.Label>Telefone</S.Label>
      <S.Telefone
        type="telefone"
        placeholder="Telefone"
        disabled={!estaEditando}
        value={telefone}
        onChange={(evento) => setTelefone(evento.target.value)}
      />
      <S.Label>Email</S.Label>
      <S.Email
        type="email"
        placeholder="Email"
        disabled={!estaEditando}
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    telefone,
                    email,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <BotaoCancelar onClick={cancelarEdicao}>Cancelar</BotaoCancelar>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <BotaoRemover onClick={() => dispatch(remover(id))}>
              Remover
            </BotaoRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
