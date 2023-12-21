import { ComponentProps } from 'react'

type BackgroundProps = ComponentProps<'svg'>

export function Background(props: BackgroundProps) {
  return (
    <svg
      width={232}
      height={988}
      viewBox="0 0 232 988"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_553_4329)">
        <path fill="#0E1116" d="M0 0H232V988H0z" />
        <g opacity={0.8} filter="url(#filter0_f_553_4329)">
          <ellipse
            cx={39}
            cy={890}
            rx={147}
            ry={146}
            transform="rotate(-90 39 890)"
            fill="#255D6A"
          />
        </g>
        <g opacity={0.5} filter="url(#filter1_f_553_4329)">
          <ellipse
            cx={20.5}
            cy={29.5}
            rx={110.5}
            ry={110.5}
            transform="rotate(-90 20.5 29.5)"
            fill="#255D6A"
          />
        </g>
        <g opacity={0.8} filter="url(#filter2_f_553_4329)">
          <ellipse
            cx={216.5}
            cy={29.5}
            rx={110.5}
            ry={110.5}
            transform="rotate(-90 216.5 29.5)"
            fill="#2A2879"
          />
        </g>
        <g opacity={0.8} filter="url(#filter3_f_553_4329)">
          <circle
            cx={212.5}
            cy={412.5}
            r={147.5}
            transform="rotate(-90 212.5 412.5)"
            fill="#2A2879"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_553_4329"
          x={-631.81}
          y={218.19}
          width={1341.62}
          height={1343.62}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={262.405}
            result="effect1_foregroundBlur_553_4329"
          />
        </filter>
        <filter
          id="filter1_f_553_4329"
          x={-279.31}
          y={-270.31}
          width={599.62}
          height={599.62}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={94.655}
            result="effect1_foregroundBlur_553_4329"
          />
        </filter>
        <filter
          id="filter2_f_553_4329"
          x={-83.31}
          y={-270.31}
          width={599.62}
          height={599.62}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={94.655}
            result="effect1_foregroundBlur_553_4329"
          />
        </filter>
        <filter
          id="filter3_f_553_4329"
          x={-388.31}
          y={-188.31}
          width={1201.62}
          height={1201.62}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={226.655}
            result="effect1_foregroundBlur_553_4329"
          />
        </filter>
        <clipPath id="clip0_553_4329">
          <path fill="#fff" d="M0 0H232V988H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
