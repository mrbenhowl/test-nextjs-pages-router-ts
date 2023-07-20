import Anchor from '@/components/anchor'
import Head from 'next/head'

export default function Settings () {
  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>
      <header>
        <h1>Settings</h1>
      </header>
      <main>
        <div>Stuff about settings</div>
        <Anchor href='/'>Go back to the root</Anchor>
      </main>
    </>
  )
}
