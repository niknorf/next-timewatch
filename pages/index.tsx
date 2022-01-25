import type { NextPage } from "next";
import type { ActivityType } from "@prisma/client";
import Head from "next/head";
import { dehydrate, QueryClient, useQuery } from "react-query";
import Input from "../components/Input";
import Layout from "../components/Layout";
import Time from "../components/Time";
import Categories from "../components/Categories";
import Buttons from "../components/Buttons";
import Activity from "../components/Activity";
import ToLogs from "../components/ToLogs";

const fetchActivityTypes = () =>
  fetch("http://localhost:3000/api/activity-type").then((response) =>
    response.json()
  );

const Home: NextPage = () => {
  const { data: activityTypesData } = useQuery<ActivityType[]>(
    ["activityTypes"],
    fetchActivityTypes
  );

  return (
    <Layout>
      <Head>
        <title>Time Watch - New</title>
      </Head>
      <div className="space-y-4">
        <Input />
        <Time />
        <Categories activityTypes={activityTypesData} />
        <Buttons />
        <ToLogs />
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["activityTypes"], fetchActivityTypes);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;
