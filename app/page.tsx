import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-12">
      <h1 className="text-2xl font-bold">Hi, I&apos;m Hunter</h1>
      <div className="flex flex-col">
        <div className="flex mt-8 flex-col">
          <h2 className="text-lg font-medium">My Career</h2>
          <ul>
            <li>
              <Link href="https://hq.getmatter.app" className="text-blue-500">
                Matter
              </Link>{' '}
              - Senior Backend Engineer (Current)
            </li>
            <li>
              <Link href="https://www.casefleet.com" className="text-blue-500">
                CaseFleet
              </Link>{' '}
              - CTO
            </li>
          </ul>
        </div>

        <div className="flex mt-8 flex-col">
          <h2 className="text-lg font-medium">My Projects</h2>
          <ul>
            <li>
              <Link href="https://www.casefleet.com" className="text-blue-500">
                Metathon
              </Link>
            </li>
            <li>
              <Link href="https://www.spackle.so" className="text-blue-500">
                Spackle
              </Link>
            </li>
            <li>
              <Link href="https://www.archer.so" className="text-blue-500">
                Archer
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex mt-8 flex-col">
          <h2 className="text-lg font-medium">My Writing</h2>
          <ul></ul>
        </div>
      </div>
    </main>
  )
}
