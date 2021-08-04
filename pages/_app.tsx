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
        title="R2us - Nền tảng chia sẻ tài liệu và cảm nhận dành riêng cho trường ĐH KHTN HCM"
        desc="Mùa hè xanh 2021 - Đội hình Tin học hóa with hearts"
        icon="icons/logo.svg"
      >
        <Component {...pageProps} />
      </MegaLayout>
    </Provider>
  );
};
export default App;
