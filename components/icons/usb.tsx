import { SVGProps } from 'react'

export function UsbIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      {...props}
    >
      <g fill='currentColor'>
        <path d='M10 4.5h1v2h-1zm4 0h-1v2h1z' />
        <path
          fillRule='evenodd'
          d='M7 8.5v-7h10v7h2v11a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-11zm2-5h6v5H9zm8 7H7v9a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1z'
          clipRule='evenodd'
        />
      </g>
    </svg>
  )
}
