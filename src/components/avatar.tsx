import Image from 'next/image'

interface AvatarProps {
  size: number
  source: string
}

export function Avatar({ size, source }: AvatarProps) {
  return (
    <div
      className={`mr-4 h-[${size}] w-[${size}] rounded-full bg-gradient-vertical p-px`}
    >
      <Image
        className="rounded-full"
        src={source}
        width={size}
        height={size}
        alt="user image"
      />
    </div>
  )
}
