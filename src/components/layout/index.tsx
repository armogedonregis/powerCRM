import Head from "next/head";
import styled from "styled-components";
import tw from "twin.macro";
import { Header } from "../header";
import { Sidebar } from "../sidebar";
import { Wrapper } from "../wrapper";

type LayoutProps = {
  title?: string;
  keywords?: string;
  description?: string;
  children: React.ReactNode;
};

const PageContainer = styled.div`
  ${tw`
    text-white
    bg-bckg
    font-raleway
    overflow-x-hidden
  `}
`;

const Mains = styled.main`
${tw`
  text-black
  flex-[6]
  w-full
  overflow-x-hidden
  mt-[50px]
`}
`;

const FlexContainer = styled.div`
${tw`
  flex
`}
`;

export default function Layout({
  title = "Menu",
  keywords = "blog",
  description = "sample",
  children,
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <PageContainer>
        <Header />
        <FlexContainer>
          <Sidebar />
          <Mains>
              {children}
          </Mains>
        </FlexContainer>
      </PageContainer>
    </>
  );
}
