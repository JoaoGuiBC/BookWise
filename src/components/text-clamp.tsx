'use client'

import { ReactNode, useEffect, useMemo, useRef, useState } from 'react'

export function TextClamp({ children }: { children: ReactNode }) {
  const ref = useRef(null)

  const [isClamped, setIsClamped] = useState(true)
  const [isTruncated, setIsTruncated] = useState(false)

  const clamp = useMemo(
    () => (isClamped ? 'line-clamp-4' : 'line-clamp-none'),
    [isClamped],
  )

  useEffect(() => {
    const { offsetHeight, scrollHeight } = ref.current || {
      offsetHeight: 0,
      scrollHeight: 0,
    }

    setIsTruncated(offsetHeight < scrollHeight)
  }, [ref])

  return (
    <div className="mt-5">
      <p
        ref={ref}
        className={`text-sm font-normal leading-[160%] text-gray-300 ${clamp}`}
      >
        {children}

        {isTruncated && (
          <button
            className="sticky bottom-0 float-right h-fit w-fit bg-gray-700 px-1 font-bold text-purple-100"
            onClick={() => setIsClamped(!isClamped)}
          >
            {isClamped ? '... ver mais' : 'ver menos'}
          </button>
        )}
      </p>
    </div>
  )
}
