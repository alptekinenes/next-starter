import Head from 'next/head'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'
const fabReact = findIconDefinition({ prefix: 'fab', iconName: 'react' })

export default function Home() {
  return (
    <>
      <Head>
        <title>next-starter</title>
        <meta name="description" content="Starter for Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <FontAwesomeIcon icon={fabReact} />
        next-starter
      </main>
    </>
  )
}
