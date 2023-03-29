import { App } from '@/app/app'
import { useIntl } from 'react-intl'

import '@/assets/styles/pages/home.scss'

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
