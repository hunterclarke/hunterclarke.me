import fs from 'fs'
import { join } from 'path'
import Markdoc from '@markdoc/markdoc'
import yaml from 'js-yaml'
import { FrontMatter, postsDirectory } from './constants'

export async function getPost(slug: string) {
  const source = fs.readFileSync(join(postsDirectory, `${slug}.md`), 'utf8')
  const ast = Markdoc.parse(source)
  const content = Markdoc.transform(ast)
  const html = Markdoc.renderers.html(content)
  const { title, excerpt, publishedDate } = (
    ast.attributes.frontmatter ? yaml.load(ast.attributes.frontmatter) : {}
  ) as FrontMatter

  return {
    slug,
    title,
    excerpt,
    publishedDate: new Date(publishedDate),
    html,
  }
}

export async function getPosts() {
  const files = fs.readdirSync(postsDirectory)
  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, '')
      const source = fs.readFileSync(join(postsDirectory, `${slug}.md`), 'utf8')
      const ast = Markdoc.parse(source)
      const { title, excerpt, publishedDate } = (
        ast.attributes.frontmatter ? yaml.load(ast.attributes.frontmatter) : {}
      ) as FrontMatter

      return {
        slug,
        title,
        excerpt,
        publishedDate: new Date(publishedDate),
      }
    })
    .sort((a, b) => b.publishedDate.getTime() - a.publishedDate.getTime())
}
