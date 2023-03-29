import { App } from '@/app/app'
import { useIntl } from 'react-intl'

import '@/assets/styles/pages/not-found.scss'

export default function NotFound() {
  const { formatMessage } = useIntl()

  return (
    <>
      <App
        handle="not-found"
        title="404 - next-starter"
        description={formatMessage({ id: 'Page not found.' })}
      >
        <h1>{formatMessage({ id: 'Page not found.' })}</h1>
      </App>
    </>
  )
}
