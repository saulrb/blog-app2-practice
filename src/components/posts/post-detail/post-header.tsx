import React, { FC } from 'react'
import Image from 'next/image'
import classes from './post-header.module.css'

type Props = {
  title: string
  image: string
}

const PostHeader: FC<Props> = ({ title, image }) => {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} height={250} width={300} />
    </header>
  )
}
export default PostHeader
