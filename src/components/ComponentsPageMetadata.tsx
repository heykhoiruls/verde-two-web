// components/PageMetadata.tsx
import Head from "next/head";

const PageMetadata = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default PageMetadata;
