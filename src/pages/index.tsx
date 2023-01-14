import { App } from '@/app/app'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'
const fabReact = findIconDefinition({ prefix: 'fab', iconName: 'react' })

export default function Home() {
  return (
    <>
      <App handle="home" title="next-starter" description="Starter for Next.js">
        <FontAwesomeIcon icon={fabReact} />
        next-starter
      </App>
    </>
  )
}
