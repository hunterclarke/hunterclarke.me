import fs from 'fs'
import RSS from 'rss'
import { join } from 'path'
import { getPosts } from '../posts/posts'

export async function generateRssFeed() {
  const site_url = 'hunterclarke.me'

  const feedOptions = {
    title: "Hunter Clarke's Posts | RSS Feed",
    description: "Hunter's home on the internet",
    site_url: site_url,
    feed_url: `${site_url}/posts/rss.xml`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Hunter Clarke`,
  }

  const feed = new RSS(feedOptions)
  const posts = await getPosts()
  posts.map((post) => {
    feed.item({
      title: post.title,
      description: post.excerpt,
      url: `${site_url}/posts/${post.slug}`,
      guid: `${site_url}/posts/${post.slug}`,
      date: post.publishedDate,
    })
  })
  fs.writeFileSync(
    join(process.cwd(), 'public', 'posts', 'rss.xml'),
    feed.xml({ indent: true }),
  )
}
