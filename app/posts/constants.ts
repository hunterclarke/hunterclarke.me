import { join } from 'path'

export const postsDirectory = join(process.cwd(), 'posts')

export type FrontMatter = {
  title: string
  excerpt: string
  publishedDate: string
}
