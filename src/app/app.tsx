import Head from 'next/head'
import type { ReactNode } from 'react'

import Options from '@/components/options'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'
const farHeart = findIconDefinition({ prefix: 'far', iconName: 'heart' })
const fasHeart = findIconDefinition({ prefix: 'fas', iconName: 'heart' })

import styles from '@/app/app.module.scss'

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
        <meta name="robots" content="noindex" />
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`route-${props.handle}`}>
        <Options />
        <div className={`wrap xl-flexbox xl-center xl-1 ${styles.container}`}>
          <div className="col">
            {props.children}
            <a
              className={styles.dnomak}
              href="https://github.com/dnomak/next-starter"
              target="_blank"
              rel="noreferrer"
            >
              <span className="wrap xl-auto xl-middle xl-center xl-gutter-4">
                <span className="col">I</span>
                <span className={`col ${styles.love} ${styles.icon}`}>
                  <FontAwesomeIcon icon={farHeart} />
                  <FontAwesomeIcon icon={fasHeart} />
                </span>
                <span className={`col ${styles.love}`}>Love</span>
                <span className="col">JavaScript</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export { App }
