import { FC, Fragment } from 'react'
import Hero from '~/components/home-page/hero'
import FeaturedPosts from '~/components/home-page/featured-posts'
import { getFeaturedPosts } from '~/lib/posts-util'
import Post from '~/interfaces/post'

type Props = {
  posts: Post[]
}

const Home: FC<Props> = props => {
  const featuredPosts: Post[] = props.posts
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </Fragment>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts
    }
  }
}

export default Home
