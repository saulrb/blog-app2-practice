import React, { FC } from 'react'
import classes from './all-post.module.css'
import PostGrid from './posts-grid'
import Post from '~/interfaces/post'

type Props = {
  posts: Post[]
}
const AllPosts: FC<Props> = ({ posts }) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={posts} />
    </section>
  )
}

export default AllPosts
