import Script from 'next/script'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hunter Clarke',
  description: "Hunter's home on the internet",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XNPGZR6VQW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XNPGZR6VQW');
          `}
        </Script>
      </head>
      <body
        className={
          inter.className + 'text-sm dark:bg-slate-900 dark:text-white'
        }
      >
        {children}
      </body>
    </html>
  )
}
