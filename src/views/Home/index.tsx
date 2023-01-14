import { Layout } from "layout";
import { Hero } from "components/Hero";
import { Features } from "components/Features";
import { FlowInstall } from "components/FlowInstall";
import { FastAndPratice } from "components/FastAndPratice";

export const Home = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <FastAndPratice />
      <FlowInstall />
    </Layout>
  );
};
