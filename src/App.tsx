import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { TutorialOne } from './pages/TutorialOne.page'
import { TutorialTwo } from './pages/TutorialTwo.page'

export const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={`/tutorial-one`}>
          <TutorialOne />
        </Route>
        <Route path={`/tutorial-two`}>
          <TutorialTwo />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
