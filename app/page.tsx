import fs from 'fs'
import Link from 'next/link'
import { FrontMatter, postsDirectory } from './posts/constants'
import Markdoc from '@markdoc/markdoc'
import yaml from 'js-yaml'
import { join } from 'path'

async function getPosts() {
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

export default async function Home() {
  const posts = await getPosts()
  return (
    <main className="flex min-h-screen flex-col p-12">
      <h1 className="text-2xl font-bold">Hi, I&apos;m Hunter</h1>
      <div className="flex flex-col">
        <div className="flex mt-8 flex-col">
          <h2 className="text-lg font-medium">My Career</h2>
          <ul>
            <li>
              <Link href="https://hq.getmatter.app" className="text-blue-600">
                Matter
              </Link>{' '}
              - Senior Backend Engineer (Current)
            </li>
            <li>
              <Link href="https://www.casefleet.com" className="text-blue-600">
                CaseFleet
              </Link>{' '}
              - Co-Founder &amp; CTO
            </li>
          </ul>
        </div>

        <div className="flex mt-8 flex-col">
          <h2 className="text-lg font-medium">My Projects</h2>
          <ul>
            <li>
              <Link href="https://www.metathon.com" className="text-blue-600">
                Metathon
              </Link>
            </li>
            <li>
              <Link href="https://www.spackle.so" className="text-blue-600">
                Spackle
              </Link>
            </li>
            <li>
              <Link href="https://www.archer.so" className="text-blue-600">
                Archer
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex mt-8 flex-col">
          <h2 className="text-lg font-medium">My Writing</h2>
          <ul>
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/posts/${post.slug}`} className="text-blue-600">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
