import { Button } from '@mui/material'
import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

import { RoutePath } from '../../enums/RoutePath.enum'
import { MainLayout } from '../../layouts/Main.layout'

export const HomePage = (): ReactElement => {
  return (
    <MainLayout
      toolbarContent={
        <div>
          <Button color={`inherit`} component={Link} to={RoutePath.PathFindingAlgorithms}>
            {`Path finding algorithms`}
          </Button>
          <Button color={`inherit`} component={Link} to={RoutePath.SortingAlgorithms}>
            {`Sorting algorithms`}
          </Button>
        </div>
      }
    >
      <div>{`Home page`}</div>
    </MainLayout>
  )
}
