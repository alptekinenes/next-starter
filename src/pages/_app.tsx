import '@/assets/styles/index.scss'
import type { AppProps } from 'next/app'

import '@/app/modules/font-awesome'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
