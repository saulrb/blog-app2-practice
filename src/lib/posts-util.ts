import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postDirectory = path.join(process.cwd(), '/src/components/content/posts')

export const getPostData = (postIdentifier: string) => {
  const postSlug = postIdentifier.replace(/\.md$/, '') // removes the file extension
  const filePath = path.join(postDirectory, `${postSlug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)
  const postData = {
    slug: postSlug,
    ...data,
    content
  }
  return postData
}

export const getPostFiles = () => {
  return fs.readdirSync(postDirectory)
}

export const getAllPosts = () => {
  const postFiles = getPostFiles()

  const allPosts = postFiles.map(postFile => {
    return getPostData(postFile)
  })

  return allPosts.sort((postA: any, postB: any) => (postA.date > postB.date ? -1 : 1))
}

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts()
  const featuredPost = allPosts.filter((post: any) => post.isFeatured)
  return featuredPost
}
