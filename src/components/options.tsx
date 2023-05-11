import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'

import styles from '@/assets/styles/components/options.module.scss'
import { useOptionsStore } from '@/modules/options/store'

const Options = () => {
  const [hasHydrated, setHasHydrated] = useState(false)
  useEffect(() => {
    setHasHydrated(true)
  }, [])
  const { formatMessage } = useIntl()
  const { locale, locales, asPath } = useRouter()
  const optionsStore = useOptionsStore()

  return (
    <div className={styles.options}>
      <div className={styles['options-title']}>{formatMessage({ id: 'LANGUAGE OPTIONS:' })}</div>
      <div className="wrap xl-2 xl-gutter-8">
        {locales?.map(l => (
          <div className="col" key={l}>
            <Link href={asPath} locale={l} legacyBehavior>
              <a
                onClick={() => optionsStore.setLocale(l)}
                className={`${styles['options-item']} ${locale == l ? styles.active : ''}`}>
                {l.toLocaleUpperCase()}
              </a>
            </Link>
          </div>
        ))}
      </div>
      {hasHydrated && (
        <div className={styles['options-footer']}>
          <div>optionsStore</div>
          <div>
            name: {optionsStore.storeName}_v{optionsStore.storeVersion}
          </div>
          <div>
            locale: <span>{optionsStore.locale}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Options
