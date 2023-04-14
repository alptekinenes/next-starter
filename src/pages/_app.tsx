import '@/assets/styles/index.scss'
import '@/app/modules/font-awesome'

import type { AppContext, AppProps } from 'next/app'
import App from 'next/app'
import { IntlProvider } from 'react-intl'

import i18n from '@/app/modules/i18n'

interface MyAppProps extends AppProps {
  data: any
}

function MyApp({ Component, pageProps, router, data }: MyAppProps) {
  return (
    <IntlProvider
      defaultLocale={router.defaultLocale}
      locale={router.locale as string}
      messages={data}
    >
      <Component {...pageProps} />
    </IntlProvider>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)

  const { locale } = appContext.ctx

  return {
    ...appProps,
    data: i18n[locale as keyof typeof i18n],
  }
}

export default MyApp
