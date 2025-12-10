import styled from 'styled-components'
import vars from '../../styles/vars'

export const Card = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  padding: 16px;
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 32px;
  margin-top: 40px;
  border-radius: 16px;

  label {
    display: flex;
    margin-bottom: 16px;
  }
`

export const GridAvatar = styled.div`
  display: flex;
  justify-content: center;
`

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-top: 20px;
`

export const Nome = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
  margin-bottom: 16px;
`

export const Label = styled.span`
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${vars.azulEscuro};
`

export const Telefone = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  font-weight: bold;
  background-color: #fff;
  color: #666666;
  border: 1px solid #666666;
  border-radius: 8px;
  margin-bottom: 8px;
`

export const Email = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  font-weight: bold;
  background-color: #fff;
  color: #666666;
  border: 1px solid #666666;
  border-radius: 8px;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
  padding-bottom: 20px;
`
