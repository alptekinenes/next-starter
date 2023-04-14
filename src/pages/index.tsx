import '@/assets/styles/pages/home.scss'

import { useIntl } from 'react-intl'

import { App } from '@/app/app'

export default function Home() {
  const { formatMessage } = useIntl()

  return (
    <>
      <App
        handle="home"
        title="next-starter"
        description={formatMessage({ id: 'Starter for Next.js' })}
      >
        <h1>next-starter</h1>
      </App>
    </>
  )
}
