import Markdown, { SyntaxHighlighter } from 'react-markdown'
import { FC } from 'react'
import classes from './post-content.module.css'
import PostHeader from './post-header'
import { PostContentI } from '~/interfaces/post'
import Image from 'next/image'

type Props = {
  post: PostContentI
}
const PostContent: FC<Props> = props => {
  const { post } = props
  const imagePath = `/images/posts/${post.slug}/${post.image}`
  const renderers = {
    // img(image: any) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   )
    // },
    p(paragraph: any) {
      const { node } = paragraph
      if (node.children[0].type === 'element' && node.children[0].tagName === 'img') {
        const image = node.children[0]
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        )
      }
      return <p>{paragraph.children}</p>
    }
  }

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <Markdown components={renderers}>{post.content}</Markdown>
    </article>
  )
}
export default PostContent
