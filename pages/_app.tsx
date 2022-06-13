import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'


function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        <title>33 Conceptos Javascript</title>
        <meta name="description" content="Conceptos javascript para desarrolladores" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* I can use this place to set: Providers - Context, Layout for the app, pass props */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
  
}

export default MyApp
