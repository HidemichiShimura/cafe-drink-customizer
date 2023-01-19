import Head from 'next/head'

import { PageLayout, Header } from '@/components'

export default function Home({ children }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name='description'
          content='Generated by create next app'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>

      <main>
        <Header />
        <PageLayout>
          <div>LP</div>
        </PageLayout>
      </main>
    </>
  )
}
