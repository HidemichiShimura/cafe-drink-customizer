import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

import 'styles/global.scss'
import 'styles/index.module.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
