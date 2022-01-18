import Head from "next/head";
import { PrismaClient } from "@prisma/client";
import Input from "../components/Input";
import Layout from "../components/Layout";
import Time from "../components/Time";
import Categories from "../components/Categories";
import Buttons from "../components/Buttons";
import Activity from "../components/Activity";
import ToLogs from "../components/ToLogs";

export const getStaticProps = async () => {
  const prisma = new PrismaClient();
  const query = await prisma.activityType.findMany();
  const activityTypes = query;
  return { props: { activityTypes } };
};

export default function Home({ activityTypes }) {
  return (
    <Layout>
      <Head>
        <title>Time Watch - New</title>
      </Head>
      <div className="space-y-4">
        <Input />
        <Time />
        <Categories activityTypes={activityTypes} />
        <Buttons />
        <Activity />
        <ToLogs />
      </div>
    </Layout>
  );
}
