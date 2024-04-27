import { FC } from 'react'
import AllPosts from '~/components/posts/all-posts'
import { getAllPosts } from '~/lib/posts-util'
import Post from '~/interfaces/post'

type Props = {
  posts: Post[]
}
const AllPostsPage: FC<Props> = props => {
  return (
    <>
      <AllPosts posts={props.posts} />
    </>
  )
}

export function getStaticProps() {
  const allPosts = getAllPosts()

  return {
    props: {
      posts: allPosts
    }
  }
}

export default AllPostsPage
