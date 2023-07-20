import Link from 'next/link'
import * as styles from './anchor.css'

type Props = {
  children: string
  href: string
}

export default function Anchor ({ children, href }: Props) {
  return (
    <Link href={href} className={styles.link}>
      {children}
    </Link>
  )
}
