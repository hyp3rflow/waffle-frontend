import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import GlobalStyle from 'components/base/GlobalStyle';

const App = ({ Component, pageProps }: AppProps): React.ReactNode => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>waffle :: 보고싶은 것은 많지만, 볼만한 것들은 적으니까.</title>
        <style>
          {`
          @import
          url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
          @import url('//fonts.googleapis.com/earlyaccess/notosanskr.css');
          @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
          `}
        </style>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
