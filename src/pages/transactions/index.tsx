import type { NextPageWithLayout } from '../_app'
import { ReactElement, useState } from 'react'
import Head from 'next/head'
import Layout from '@/components/layout'
import Anchor from '@/components/anchor'
import * as styles from './transactions.css'
import TransactionDetail from '@/components/transactionDetails'

type Props = {
  transactions: Transaction[]
}

interface Transaction {
  description: string
  amount: number
  id: number
}

const Transactions: NextPageWithLayout<Props> = ({ transactions }: Props) => {
  const [transactionId, setTransactionId] = useState(null)

  return (
    <>
      <Head>
        <title>Transactions</title>
      </Head>
      <header>
        <h1>Transactions</h1>
      </header>
      <main>
        <section className={styles.layout}>
          <div>
            <h2>History</h2>
            {transactions.map((transaction: any) => {
              return (
                <div
                  key={transaction.id}
                  onClick={() => {
                    setTransactionId(transaction.id)
                  }}
                  className={styles.transaction}
                >
                  {transaction.description} {transaction.amount}
                </div>
              )
            })}
          </div>
          <div>
            {transactionId && (
              <TransactionDetail transactionId={transactionId} />
            )}
          </div>
          <Anchor href='/'>Go back to the root</Anchor>
        </section>
      </main>
    </>
  )
}

Transactions.getLayout = function getLayout (page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Transactions

export async function getServerSideProps (): Promise<{
  props: { transactions: Transaction[] }
}> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/transactions`
  )
  const transactions = await res.json()

  // Pass data to the page via props
  return { props: { transactions } }
}
