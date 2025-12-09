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
  padding: 0 40px;
  overflow-y: scroll;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
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
