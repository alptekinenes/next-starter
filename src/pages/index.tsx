import { App } from '@/app/app'
import { useIntl } from 'react-intl'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'
const fabReact = findIconDefinition({ prefix: 'fab', iconName: 'react' })

export default function Home() {
  const { formatMessage } = useIntl()
  return (
    <>
      <App handle="home" title="next-starter" description="Starter for Next.js">
        <FontAwesomeIcon icon={fabReact} />
        next-starter ({formatMessage({ id: 'Language' })})
      </App>
    </>
  )
}
