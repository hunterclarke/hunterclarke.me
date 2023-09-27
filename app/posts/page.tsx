import Link from 'next/link'
import { getPosts } from './posts'

export default async function Posts() {
  const posts = await getPosts()
  return (
    <main className="flex min-h-screen flex-col p-12">
      <h1 className="text-2xl font-bold">Hi, I&apos;m Hunter</h1>
      <div className="flex flex-col">
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
