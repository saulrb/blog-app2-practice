import { FC } from 'react'
import PostContent from '~/components/posts/post-detail/post-content'
import Post from '~/interfaces/post'
import { getPostData, getPostFiles } from '~/lib/posts-util'

type Props = {
  post: Post
}

const PostDetailPage: FC<Props> = props => {
  return <PostContent post={props.post} />
}

export function getStaticProps(context: any) {
  const { params } = context
  const { slug } = params
  const postData = getPostData(slug)
  return {
    props: {
      post: postData
    },
    revalidate: 600
  }
}

export function getStaticPaths() {
  const postFileNames = getPostFiles()

  const slugs = postFileNames.map(fileName => fileName.replace(/\.md$/, ''))

  return {
    paths: slugs.map(slug => ({ params: { slug: slug } })),
    fallback: false
  }
}

export default PostDetailPage
