import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useIntl } from 'react-intl'

import styles from '@/assets/styles/components/options.module.scss'
import { useOptionsStore } from '@/modules/options/store'
import { removeOldLocalStorageData } from '@/modules/utils'

const Options = () => {
  const { formatMessage } = useIntl()
  const { locale, locales, asPath } = useRouter()
  const optionsStore = useOptionsStore()
  if (!optionsStore.locale) optionsStore.changeLocale(`${locale}`)

  useEffect(() => {
    removeOldLocalStorageData(optionsStore.storeName, optionsStore.storeVersion)
  })

  return (
    <div className={styles.options}>
      <div className={styles['options-title']}>
        {formatMessage({ id: 'LANGUAGE OPTIONS:' })}
      </div>
      <div className="wrap xl-2 xl-gutter-8">
        {locales?.map(l => (
          <div className="col" key={l}>
            <Link href={asPath} locale={l} legacyBehavior>
              <a
                onClick={() => optionsStore.changeLocale(l)}
                className={`${styles['options-item']} ${
                  locale == l ? styles.active : ''
                }`}
              >
                {l.toLocaleUpperCase()}
              </a>
            </Link>
          </div>
        ))}
      </div>
      <div className={styles['options-footer']}>
        <div>optionsStore</div>
        <div>
          name: {optionsStore.storeName}_v{optionsStore.storeVersion}
        </div>
        <div>
          locale:{' '}
          <span suppressHydrationWarning={true}>{optionsStore.locale}</span>
        </div>
      </div>
    </div>
  )
}

export default Options
