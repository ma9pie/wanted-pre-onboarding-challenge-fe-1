import "@/styles/app.scss";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps?.dehydrateState}>
        <RecoilRoot>{getLayout(<Component {...pageProps} />)}</RecoilRoot>
      </Hydrate>
      <ReactQueryDevtoolsWrapper>
        {typeof window !== "undefined" &&
          window.location.hostname === "localhost" && (
            <ReactQueryDevtools initialIsOpen={false} />
          )}
      </ReactQueryDevtoolsWrapper>
    </QueryClientProvider>
  );
}

export default App;

const ReactQueryDevtoolsWrapper = styled.div`
  background-color: black !important;
  color: white !important;
  & * {
    background-color: inherit;
    color: inherit;
  }
`;
