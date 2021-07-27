import React, { FC } from "react";
import { AppProps } from "next/app";
import "../global.css";
import { store } from "redux/store";
import { Provider } from "react-redux";
import MegaLayout from "components/layout/MegaLayout";
// import { useRouter } from 'next/dist/client/router';
// import * as gtag from '../lib/gtag';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  // const router = useRouter();
  // useEffect(() => {
  //     const handleRouteChange = (url) => {
  //         gtag.pageview(url);
  //     };
  //     router.events.on('routeChangeComplete', handleRouteChange);
  //     return () => {
  //         router.events.off('routeChangeComplete', handleRouteChange);
  //     };
  // }, [router.events]);

  return (
    <Provider store={store}>
      <MegaLayout
        title="MHX 2021 - Tin học hóa"
        desc="Mùa hè xanh 2021 - Đội hình Tin học hóa with hearts"
        icon="/icons/mhx-logo.svg"
      >
        <Component {...pageProps} />
      </MegaLayout>
    </Provider>
  );
};
export default App;
