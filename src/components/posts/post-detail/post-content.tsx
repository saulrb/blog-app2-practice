import Markdown from 'react-markdown'
import { FC } from 'react'
import Image from 'next/image'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'

import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'

import PostHeader from './post-header'
import { PostContentI } from '~/interfaces/post'
import classes from './post-content.module.css'

type Props = {
  post: PostContentI
}

SyntaxHighlighter.registerLanguage('javascript', js)
SyntaxHighlighter.registerLanguage('css', css)

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
    },
    code(code: any) {
      const { className, node, children, ...rest } = code
      const match = /language-(\w+)/.exec(className || '') || ''
      return (
        <SyntaxHighlighter {...rest} style={atomDark} PreTag="div" language={match[1]}>
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      )
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
