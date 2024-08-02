import ReactDOM from 'react-dom'
import ReactDOMClient from 'react-dom/client'
import { FC } from 'react'

import classes from './notification.module.css'

type Props = {
  title: string
  message: string
  status: string
}

const Notification: FC<Props> = props => {
  const { title, message, status } = props

  let statusClasses = ''

  if (status === 'success') {
    statusClasses = classes.success
  }

  if (status === 'error') {
    statusClasses = classes.error
  }

  const cssClasses = `${classes.notification} ${statusClasses}`
  const notifications = document.getElementById('notifications') as Element
  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    notifications
  )
}

export default Notification
