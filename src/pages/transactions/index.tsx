import type { NextPageWithLayout } from '../_app'
import { ReactElement } from 'react'
import Head from 'next/head'
import Layout from '@/components/layout'
import Anchor from '@/components/anchor'

type Props = {
  transactions: Transaction[]
}

interface Transaction {
  description: string
  amount: number
}

const Transactions: NextPageWithLayout<Props> = ({ transactions }: Props) => {
  return (
    <>
      <Head>
        <title>Transactions</title>
      </Head>
      <header>
        <h1>Transactions</h1>
      </header>
      <main>
        <section>
          {transactions.map((transaction, key: any) => {
            return (
              <div key={key}>
                {transaction.description}, {transaction.amount}
              </div>
            )
          })}

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
  const res = await fetch(`http://localhost:4545/transactions`)
  const transactions = await res.json()

  // Pass data to the page via props
  return { props: { transactions } }
}
