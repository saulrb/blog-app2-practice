export default interface Post {
  data: { [key: string]: any }
  content: string
  slug: string
  date: Date
  image: string
  title: string
  excerpt: string
}

export interface PostContentI {
  data: { [key: string]: any }
  content: string
  slug: string
  image: string
  title: string
}
