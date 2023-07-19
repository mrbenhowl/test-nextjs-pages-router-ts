import Link from 'next/link'
import { root } from './navItem.css'

type Props = {
  children: string
  path: string
}

export default function Nav ({ children, path }: Props) {
  return (
    <div className={root}>
      <Link href={path}>{children}</Link>
    </div>
  )
}
