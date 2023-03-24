import Link from 'next/link'
import { useIntl } from 'react-intl'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { removeOldLocalStorageData } from '@/modules/utils'
import { useOptionsStore } from '@/modules/options/store'

import styles from '@/assets/styles/components/options.module.scss'

const Options = () => {
  const { formatMessage } = useIntl()
  const { locale, locales, asPath } = useRouter()
  const optionsStore = useOptionsStore()

  useEffect(() => {
    removeOldLocalStorageData(optionsStore.storeName, optionsStore.storeVersion)
    if (!optionsStore.locale) optionsStore.changeLocale(`${locale}`)
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
                  optionsStore.locale == l ? styles.active : ''
                }`}
              >
                {l.toLocaleUpperCase()}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Options
