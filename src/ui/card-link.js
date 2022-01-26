import styled from 'styled-components'
import { CardActionArea } from '@material-ui/core'
import { Link } from 'react-router-dom'

const CardLink = styled(CardActionArea).attrs({
  component: Link
})`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-width: 250px;
  padding: 20px 0;
`

export default CardLink