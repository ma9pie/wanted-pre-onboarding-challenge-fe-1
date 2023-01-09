import Head from "next/head";
import React from "react";

function HeadComponent(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
    </Head>
  );
}

export default HeadComponent;

HeadComponent.defaultProps = {
  title: "TODO LIST APP",
  description: "프리온보딩 프론트엔드 챌린지 TODO LIST APP",
};
