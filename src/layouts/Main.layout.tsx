import { AppBar, Button, Toolbar } from '@mui/material'
import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

import { MainLayoutProps } from './Main.layout.props'

export const MainLayout = (props: MainLayoutProps): ReactElement => {
  return (
    <div style={{ display: `flex`, flexFlow: `column`, minHeight: `100vh` }}>
      <AppBar position={`static`}>
        <Toolbar>
          <Button color={`inherit`} component={Link} to={`/`}>
            {`Home`}
          </Button>
          {props.toolbarContent}
        </Toolbar>
      </AppBar>
      <main style={{ display: `flex`, flexFlow: `column`, flexGrow: 1 }}>{props.children}</main>
    </div>
  )
}
