import { Menu } from '@/components/menu'

export default function AccessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid min-h-screen grid-cols-app">
      <Menu />
      <main className="col-start-2 flex flex-col gap-10 overflow-x-hidden px-24 py-20">
        {children}
      </main>
    </div>
  )
}
