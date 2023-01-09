import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="프리온보딩 프론트엔드 챌린지 TODO LIST APP"
        />
        {/* 다크모드 시 화면 깜빡임 제거 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const theme = localStorage.getItem("theme");
              document.documentElement.setAttribute("data-theme", theme); 
            `,
          }}
        ></script>
      </Head>
      <body>
        <div id="modal"></div>
        <div id="bottom-sheet"></div>
        <div id="toast-popup"></div>
        <div id="confirm-modal"></div>
        <div id="alert-modal"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
