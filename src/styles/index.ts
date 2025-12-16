import styled, { createGlobalStyle } from 'styled-components'
import vars from './vars'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: block;
`

export const MainContainer = styled.main`
  padding: 0 160px;
`

export const ListaContainer = styled.div`
  height: 90vh;
  overflow: auto;
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`

export const Campo = styled.input`
  max-width: 720px;
  width: 100%;
  justify-content: center;
  padding: 8px;
  font-size: 14px;
  font-weight: bold;
  background-color: #fff;
  color: #666666;
  border: 1px solid #666666;
  border-radius: 8px;
`

export const Botao = styled.button`
  padding: 6px 12px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  background-color: ${vars.azulEscuro};
  border: none;
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoCancelar = styled(Botao)`
  background-color: ${vars.vermelho};
`

export const BotaoRemover = styled(Botao)`
  background-color: ${vars.vermelho};
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${vars.verde};
`

export default EstiloGlobal
