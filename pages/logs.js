import Head from "next/head";
import { PrismaClient } from "@prisma/client";
import Layout from "../components/Layout";
import Activity from "../components/Activity";

export const getStaticProps = async () => {
  const prisma = new PrismaClient();
  const query = await prisma.activity.findMany({
    include: { activityType: true },
  });
  const activities = query.map((activity) => ({
    ...activity,
    startedAt: activity.startedAt.toISOString(),
    endedAt: activity.endedAt.toISOString(),
  }));
  return { props: { activities } };
};

export default function Logs({ activities }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Logs</title>
        </Head>
        <h1>Logs</h1>
        <ul>
          {activities.map((activity) => (
            <li key={activity.id}>
              <p>{activity.startedAt}</p>
              <p>{activity.endedAt}</p>
              <p>{activity.activityType.name}</p>
              <p>{activity.title}</p>
            </li>
          ))}
        </ul>
        <Activity />
      </Layout>
    </>
  );
}
