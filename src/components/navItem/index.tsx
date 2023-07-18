import { root } from './navItem.css'

type Props = {
  children: string
}

export default function Nav ({ children }: Props) {
  return <div className={root}>{children}</div>
}
