import { useDispatch, useSelector } from 'react-redux'
import { alterarTermo } from '../../store/reducers/filtro'
import { Container } from './styles'
import { RootReducer } from '../../store'
import { Campo } from '../../styles'

const BarraPesquisa = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <Container>
      <Campo
        type="text"
        placeholder="Pesquisar"
        value={termo}
        onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
      />
    </Container>
  )
}
export default BarraPesquisa
