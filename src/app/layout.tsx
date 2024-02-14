import './globals.css'

import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Nunito_Sans as NuninoSans } from 'next/font/google'

import { localization } from '@/lib/clerk'

const nunitoSans = NuninoSans({ subsets: ['latin'], variable: '--font-nunito' })

export const metadata: Metadata = {
  title: {
    template: '%s | BookWise',
    default: 'BookWise',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      localization={localization}
      afterSignInUrl="/"
      afterSignUpUrl="/"
    >
      <html className={nunitoSans.variable} lang="pt">
        <body className="bg-gray-800 text-gray-200 antialiased">
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
