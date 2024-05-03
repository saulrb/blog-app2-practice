import React, { FC, useState, useEffect } from 'react'

import Notification from '../ui/notification'
import classes from './contact-form.module.css'

const sendContactData = async (contactDetails: any) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const resData: any = await response.json()
  if (!response.ok) {
    throw new Error(resData.message || 'Something went wrong')
  }
}

const ContactForm: FC = () => {
  const [requestStatus, setRequestStatus] = useState(null) // pending success or error
  const [requestError, setRequestError] = useState(null)

  useEffect(() => {
    if (requestStatus === 'error' || requestStatus === 'success') {
      const timer = setTimeout(() => {
        setRequestStatus(null)
        setRequestError(null)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [requestStatus])

  const sendMessageHandler = async (event: any) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries())

    setRequestStatus('pending')
    try {
      await sendContactData(data)
      setRequestStatus('success')
    } catch (error: any) {
      setRequestError(error.message)
      setRequestStatus('error')
    }
  }

  let notification

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way'
    }
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Sending message...',
      message: 'Your message was sent!'
    }
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Sending message...',
      message: requestError
    }
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email"> Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="name"> Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your message</label>
          <textarea id="message" name="message" rows={5}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.status}
          message={notification.message}
        />
      )}
    </section>
  )
}

export default ContactForm
