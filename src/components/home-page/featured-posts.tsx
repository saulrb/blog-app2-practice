import React, { FC } from 'react'

import PostGrid from '../posts/posts-grid'
import Post from '~/interfaces/post'
import classes from './featured-posts.module.css'

type Props = {
  posts: Post[]
}

const FeaturedPosts: FC<Props> = ({ posts }) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={posts} />
    </section>
  )
}

export default FeaturedPosts
