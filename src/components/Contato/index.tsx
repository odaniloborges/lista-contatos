import { useState } from 'react'
import { Botao, BotaoCancelar, BotaoRemover, BotaoSalvar } from '../../styles'
import * as S from './styles'

const Contato = () => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Nome>Jai Barcellos</S.Nome>
      <S.Label>Telefone</S.Label>
      <S.Telefone type="telefone" placeholder="Telefone" />
      <S.Label>Email</S.Label>
      <S.Email type="email" placeholder="Email" />
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
