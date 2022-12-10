import '../styles/globals.css'
import Layout from '../components/Layout/Layout'
import {useState} from "react";
import {QueryClient, QueryClientProvider, Hydrate} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {SessionProvider} from "next-auth/react";

function MyApp({
  Component,
  pageProps: {session, ...pageProps}
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp
