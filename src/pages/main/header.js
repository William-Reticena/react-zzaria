import React, { useState } from 'react'
import styled from 'styled-components'
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar as MaterialToobar,
  Typography,
} from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { useAuth } from '../../hooks'
import { ReactComponent as MainLogo} from '../../images/logo-react-zzaria.svg'
import { Link } from 'react-router-dom'
import { HOME } from '../../routes'

const Header = () => {
  const [anchorElement, setAnchorElement] = useState(null)
  const { userInfo, logout } = useAuth()

  const handleOpenMenu = (e) => {
    setAnchorElement(e.target)
  }

  const handleClose = () => {
    setAnchorElement(null)
  }

  return (
    <AppBar>
    <Toolbar>
      <LogoContainer>
        <LinkLogo to={HOME}>
          <Logo />
        </LinkLogo>
      </LogoContainer>

      <Typography color='inherit'>Olá {userInfo.user.firstName} =)</Typography>
      <IconButton color='inherit' onClick={handleOpenMenu}>
        <AccountCircle />
      </IconButton>

      <Menu
        open={!!anchorElement}
        onClose={handleClose}
        anchorEl={anchorElement}
      >
        <MenuItem onClick={logout}>Sair</MenuItem>
      </Menu>
    </Toolbar>
  </AppBar>
  )
}

const Toolbar = styled(MaterialToobar)`
  && {
    margin: 0 auto;
    max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
    width: 100%;
  }
`

const LogoContainer = styled.div`
  flex-grow: 1;
`

const LinkLogo = styled(Link)`
  display: inline-block;
`

const Logo = styled(MainLogo)`
  height: 50px;
  width: 200px;

  & path {
    fill: ${({ theme }) => theme.palette.common.white};
  }

  & line {
    stroke: ${({ theme }) => theme.palette.common.white};
  }
`

export default Header