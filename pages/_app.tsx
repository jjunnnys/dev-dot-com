import React, { ElementType } from 'react';
import Head from 'next/head';
import 'antd/dist/antd.css';

import '../styles/index.css';
import AppLayout from '../components/AppLayout';

type AppProps = {
  Component: ElementType;
};

function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>개발자 닷컴</title>
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </>
  );
}

export default App;
