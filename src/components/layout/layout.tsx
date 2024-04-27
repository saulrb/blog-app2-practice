import React, { FC, Fragment, ReactNode } from 'react'
import MainNavidation from './main-navigation'

type Props = {
  children: ReactNode | ReactNode[]
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <MainNavidation />
      <main>{children}</main>
    </Fragment>
  )
}

export default Layout
