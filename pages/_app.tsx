import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout: (page: ReactNode) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;

