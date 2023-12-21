import './globals.css'

import type { Metadata } from 'next'
import { Nunito_Sans as NuninoSans } from 'next/font/google'

const nunitoSans = NuninoSans({ subsets: ['latin'], variable: '--font-nunito' })

export const metadata: Metadata = {
  title: 'BookWise',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={nunitoSans.variable} lang="pt">
      <body className="bg-gray-800 text-gray-200 antialiased">{children}</body>
    </html>
  )
}
