import { Menu as MenuIcon } from '@mui/icons-material'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React, { Fragment, ReactElement } from 'react'

import { MainLayoutProps } from './Main.layout.props'

export const MainLayout = (props: MainLayoutProps): ReactElement => {
  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position={`static`}>
          <Toolbar>
            <IconButton aria-label={`menu`} color={`inherit`} edge={`start`} size={`large`} sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography component={`div`} sx={{ flexGrow: 1 }} variant={`h6`}>
              {`News`}
            </Typography>
            <Button color={`inherit`}>{`Login`}</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <main>{props.children}</main>
    </Fragment>
  )
}
