import { RecoilRoot } from 'recoil'

import 'styles/global.scss'
import 'styles/index.module.scss'

export default function App({
  Component,
  pageProps
}: any) {
  return (
    // @ts-expect-error TS(2749): 'RecoilRoot' refers to a value, but is being used ... Remove this comment to see the full error message
    <RecoilRoot>
      // @ts-expect-error TS(2749): 'Component' refers to a value, but is being used a... Remove this comment to see the full error message
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
