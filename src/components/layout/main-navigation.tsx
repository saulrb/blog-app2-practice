import { Fragment } from 'react'
import Link from 'next/link'
import classes from './main-navidation.module.css'

import Logo from './logo'

const MainNavidation = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <Link href="/">
          <Logo />
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/contacts">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  )
}

export default MainNavidation
