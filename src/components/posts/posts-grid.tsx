import React, { FC } from 'react'
import clasess from './posts-grid.module.css'
import PostItem from './post-item'
import Post from '~/interfaces/post'

type Props = {
  posts: Post[]
}

const PostGrid: FC<Props> = ({ posts }) => {
  return (
    <ul className={clasess.grid}>
      {posts.map((post: any) => (
        <PostItem post={post} key={post.slug} />
      ))}
    </ul>
  )
}

export default PostGrid
