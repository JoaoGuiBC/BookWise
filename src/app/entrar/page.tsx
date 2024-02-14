'use client'

import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <main className="flex h-screen items-center p-5">
      <div className="h-full w-[600px] rounded-lg bg-[url('/login-image.png')] bg-cover bg-center bg-no-repeat" />

      <div className="flex flex-1 items-center justify-center">
        <SignIn
          appearance={{
            elements: {
              card: 'bg-transparent text-gray-200 shadow-none',
              headerTitle: 'text-gray-100 font-bold text-2xl/[140%]',
              headerSubtitle: 'text-gray-200 font-normal text-base/[160%]',
              socialButtonsBlockButton:
                'flex gap-6 p-5 bg-gray-600 text-gray-200 font-normal text-lg/[160%] hover:bg-gray-500',
              footerAction: 'hidden',
              alert: 'hidden',
            },
          }}
        />
      </div>
    </main>
  )
}
