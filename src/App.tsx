import { CssBaseline } from '@mui/material'
import React, { Fragment, ReactElement } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { MainLayout } from './layouts/Main.layout'
import { TutorialOne } from './pages/TutorialOne.page'
import { TutorialTwo } from './pages/TutorialTwo.page'

export const App = (): ReactElement => {
  return (
    <Fragment>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route path={`/tutorial-one`}>
            <MainLayout>
              <TutorialOne />
            </MainLayout>
          </Route>
          <Route path={`/tutorial-two`}>
            <MainLayout>
              <TutorialTwo />
            </MainLayout>
          </Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
}
