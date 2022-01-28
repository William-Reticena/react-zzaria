import React from 'react'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'

const Title = styled(Typography).attrs({
  gutterBottom: true,
  align: true
})``

export const H3 = (props) => <Title variant='h3' {...props} />
export const H4 = (props) => <Title variant='h4' {...props} />
export const H6 = (props) => <Title variant='h6' {...props} />

export default Title