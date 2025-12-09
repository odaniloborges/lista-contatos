import { useState } from 'react'
import { Botao, BotaoCancelar, BotaoRemover, BotaoSalvar } from '../../styles'
import * as S from './styles'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({ nome, telefone, email, id }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Nome>
        {estaEditando && <em>Editando: </em>}
        {nome}
      </S.Nome>
      <S.Label>Telefone</S.Label>
      <S.Telefone type="telefone" placeholder="Telefone" value={telefone} />
      <S.Label>Email</S.Label>
      <S.Email type="email" placeholder="Email" value={email} />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar>Salvar</BotaoSalvar>
            <BotaoCancelar onClick={() => setEstaEditando(false)}>
              Cancelar
            </BotaoCancelar>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <BotaoRemover>Remover</BotaoRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
