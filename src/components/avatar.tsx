import Image from 'next/image'

interface AvatarProps {
  size: number
  source: string
}

export function Avatar({ size, source }: AvatarProps) {
  return (
    <div className={`w-fit rounded-full bg-gradient-vertical p-0.5`}>
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
