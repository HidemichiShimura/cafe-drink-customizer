import { RecoilRoot } from 'recoil';

import '@/styles/global.scss';
import '@/styles/index.module.scss';

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
