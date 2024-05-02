import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Title from "@components/Title";
import MainLayout from "@layouts/MainLayout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <MainLayout>
      <div style={{ height: "1000px", marginTop: "20px" }}>
        <Title>Home Page</Title>
        <p>um pequeno texto para ver o deploy</p>
      </div>
    </MainLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <head>
      <title>Home Page </title>;
      <meta name="description" content="Home Page" />;
    </head>
  );
};