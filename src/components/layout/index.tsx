import Nav from '@/components/navItem'
import { ReactElement, useState } from 'react'
import * as styles from './layout.css'

type Props = {
  children: ReactElement
}

export default function Layout ({ children }: Props) {
  const [value, setValue] = useState<boolean>(false)

  return (
    <div>
      <nav className={styles.navContainer}>
        <Nav path='/transactions'>Transactions</Nav>
        <Nav path='/settings'>Settings</Nav>
      </nav>

      <section className={styles.buttonDescription}>
        <p>
          The following &lt;button/&gt; is part of the Layout component
          (@/components/layout), which is used by both the root index.tsx and
          transactions/index.tsx file. State is maintained when navigating
          between these paths. State is reset if you navigate to a component
          that does not have the Layout component.
        </p>
        <div className={styles.buttonStateContainer}>
          <div className={styles.buttonContainer}>
            <button
              onClick={() => {
                setValue(!value)
              }}
            >
              click me
            </button>
          </div>

          <div>state: {value ? 'true' : 'false'}</div>
        </div>
      </section>

      {children}
    </div>
  )
}
