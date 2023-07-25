import Anchor from '@/components/anchor'
import Head from 'next/head'

export default function Nested () {
  return (
    <>
      <Head>
        <title>Nested</title>
      </Head>
      <header>
        <h1>Nested</h1>
      </header>
      <main>
        <Anchor href='/'>Go back to the root</Anchor>
      </main>
    </>
  )
}
