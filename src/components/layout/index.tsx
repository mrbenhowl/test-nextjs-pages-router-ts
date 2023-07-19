import Nav from '@/components/navItem'
import { ReactElement, useState } from 'react'

type Props = {
  children: ReactElement
}

export default function Layout ({ children }: Props) {
  const [test, setTest] = useState<boolean>(false)

  return (
    <div>
      <div>
        <Nav path='/transactions'>Transactions</Nav>
        <Nav path='/settings'>Settings</Nav>
      </div>
      <button onClick={() => {setTest(!test)}}>click me</button>
      <div>test: {test ? 'true': 'false'}</div>
      {children}
    </div>
  )
}
