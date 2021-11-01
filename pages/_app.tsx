import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { globalStyles } from 'styles/global';
import { Layout } from 'components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
