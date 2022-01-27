import Head from "next/head";
import type { NextPage } from "next";
import { Activity, ActivityType } from "@prisma/client";
import { dehydrate, QueryClient, useQuery } from "react-query";
import Layout from "../components/Layout";
import ActivityItem from "../components/Activity";

const fetchActivities = () =>
  fetch("http://localhost:3000/api/activity").then((response) =>
    response.json()
  );

const Logs: NextPage = () => {
  const { data: activitiesData } = useQuery<
    (Activity & {
      activityType: ActivityType;
    })[]
  >(["activities"], fetchActivities);

  return (
    <Layout>
      <Head>
        <title>Logs</title>
      </Head>
      <h1>Logs</h1>
      <ul>
        {activitiesData.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </ul>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["activities"], fetchActivities);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Logs;
