import { Menu } from '@/components/menu'

export default function AccessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <Menu />
      {children}
    </div>
  )
}
