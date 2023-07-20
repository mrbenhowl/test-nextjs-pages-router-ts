import Link from 'next/link'
import * as styles from './navItem.css'

type Props = {
  children: string
  path: string
}

export default function Nav ({ children, path }: Props) {
  return (
    <div className={styles.root}>
      <Link href={path} className={styles.link}>
        {children}
      </Link>
    </div>
  )
}
