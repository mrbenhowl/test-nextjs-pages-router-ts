import type { NextPageWithLayout } from '../_app'
import { ReactElement } from 'react'
import Head from 'next/head'
import Layout from '@/components/layout'

const Transactions: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Transactions</title>
      </Head>
      <main>
        <div>Transactions</div>
      </main>
    </>
  )
}

Transactions.getLayout = function getLayout (page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Transactions
