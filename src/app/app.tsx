import Head from 'next/head'
import type { ReactNode } from 'react'

type IAppProps = {
  handle: string
  title: string
  description: string
  children: ReactNode
}

const App = (props: IAppProps) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`route-${props.handle}`}>{props.children}</div>
    </>
  )
}

export { App }
