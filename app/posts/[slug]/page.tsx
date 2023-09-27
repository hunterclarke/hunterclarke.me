import fs from 'fs'
import clsx from 'clsx'
import Link from 'next/link'
import { postsDirectory } from '../constants'
import { getPost } from '../posts'

export async function generateStaticParams() {
  const files = fs.readdirSync(postsDirectory)
  return files.map((file) => ({ slug: file.replace(/\.md$/, '') }))
}

export async function generateMetadata({ params }: any) {
  const { slug } = params
  const post = await getPost(slug)
  return {
    title: `${post.title}`,
    description: post.excerpt,
  }
}

export default async function PostPage({ params }: any) {
  const { slug } = params
  const post = await getPost(slug)

  return (
    <main className="flex flex-grow flex-col pb-16 dark:text-white p-12 justify-center items-center">
      <div className="prose dark:prose-invert w-full">
        <Link href={`/posts/${slug}`}>
          <h1>{post.title}</h1>
        </Link>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          className={clsx(
            'prose prose-slate dark:prose-invert max-w-none dark:text-white',
            // headings
            'prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]',
            // lead
            'prose-lead:text-slate-500 dark:prose-lead:text-slate-400',
            // links
            'prose-a:font-semibold dark:prose-a:text-sky-400',
            // link underline
            'prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.sky.300))] hover:prose-a:[--tw-prose-underline-size:6px] dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.sky.800))] dark:hover:prose-a:[--tw-prose-underline-size:6px] dark:[--tw-prose-background:theme(colors.slate.900)]',
            // pre
            'prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:shadow-lg dark:prose-pre:bg-slate-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-slate-300/10',
            // hr
            'dark:prose-hr:border-slate-800',
          )}
        />
      </div>
    </main>
  )
}
