import { CssBaseline } from '@mui/material'
import React, { Fragment, ReactElement } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { RoutePath } from './enums/RoutePath.enum'
import { MainLayout } from './layouts/Main.layout'
import { HomePage } from './pages/Home/Home.page'
import { PathFindingAlgorithms } from './pages/PathFindingAlgorithms/PathFindingAlgorithms.page'
import { SortingAlgorithmsPage } from './pages/SortingAlgorithms/SortingAlgorithms.page'
import { TutorialOne } from './pages/TutorialOne.page'
import { TutorialTwo } from './pages/TutorialTwo.page'

export const App = (): ReactElement => {
  return (
    <Fragment>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route exact={true} path={RoutePath.PathFindingAlgorithms}>
            <PathFindingAlgorithms />
          </Route>
          <Route exact={true} path={RoutePath.SortingAlgorithms}>
            <SortingAlgorithmsPage />
          </Route>
          <Route exact={true} path={RoutePath.Home}>
            <HomePage />
          </Route>
          <Route exact={true} path={`/tutorial-one`}>
            <MainLayout>
              <TutorialOne />
            </MainLayout>
          </Route>
          <Route exact={true} path={`/tutorial-two`}>
            <MainLayout>
              <TutorialTwo />
            </MainLayout>
          </Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
}
