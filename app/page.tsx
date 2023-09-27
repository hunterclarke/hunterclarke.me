import Link from 'next/link'
import { getPosts } from './posts/posts'
import { generateRssFeed } from './scripts/gen-rss'

export async function generateStaticParams() {
  await generateRssFeed()
  return []
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
              <Link
                href="https://hq.getmatter.app"
                className="text-blue-600 dark:text-sky-400"
              >
                Matter
              </Link>{' '}
              - Senior Backend Engineer (Current)
            </li>
            <li>
              <Link
                href="https://www.casefleet.com"
                className="text-blue-600 dark:text-sky-400"
              >
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
              <Link
                href="https://www.metathon.com"
                className="text-blue-600 dark:text-sky-400"
              >
                Metathon
              </Link>
            </li>
            <li>
              <Link
                href="https://www.spackle.so"
                className="text-blue-600 dark:text-sky-400"
              >
                Spackle
              </Link>
            </li>
            <li>
              <Link
                href="https://www.archer.so"
                className="text-blue-600 dark:text-sky-400"
              >
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
                <Link
                  href={`/posts/${post.slug}`}
                  className="text-blue-600 dark:text-sky-400"
                >
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
