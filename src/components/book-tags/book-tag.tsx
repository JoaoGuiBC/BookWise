import { VariantProps, tv } from 'tailwind-variants'

const bookTag = tv({
  base: 'h-8 cursor-pointer whitespace-nowrap rounded-full px-4 py-1 text-center',
  variants: {
    isSelected: {
      true: 'bg-purple-200 text-gray-100',
      false: 'border border-purple-100 text-purple-100',
    },
  },
})

interface BookTagProps extends VariantProps<typeof bookTag> {
  title: string
}

export function BookTag({ title, isSelected = false }: BookTagProps) {
  return <span className={bookTag({ isSelected })}>{title}</span>
}
