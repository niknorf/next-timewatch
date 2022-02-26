import { useState } from "react";
import type { NextPage } from "next";
import type { Activity, ActivityType } from "@prisma/client";
import Head from "next/head";
import {
  dehydrate,
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { UilPlay, UilCheck } from "@iconscout/react-unicons";
import Input from "../components/Input";
import Layout from "../components/Layout";
import Buttons from "../components/Buttons";
import ToLogs from "../components/ToLogs";
import CircleButton from "../components/CircleButton";
import Time from "../components/Time";

const fetchActivityTypes = () =>
  fetch("http://localhost:3000/api/v1/activity-types").then((response) =>
    response.json()
  );

const Home: NextPage = () => {
  const queryClient = useQueryClient();

  const { data: activityTypesData } = useQuery<ActivityType[]>(
    ["activityTypes"],
    fetchActivityTypes
  );

  const [currentActivity, setCurrentActivity] = useState<{
    title: string;
    startTime: Date;
  }>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{ activity: string }>();
  const mutation = useMutation<
    Activity,
    void,
    { title: string; startedAt: string; endedAt: string }
  >(
    (activity) =>
      fetch("/api/v1/activities", {
        method: "POST",
        body: JSON.stringify({
          title: activity.title,
          startedAt: activity.startedAt,
          endedAt: new Date().toISOString(),
        }),
      }).then((response) => response.json()),
    {
      onSuccess: (data) => {
        queryClient.setQueryData(["activities", { id: data.id }], data);
      },
    }
  );

  const startActivity = (data: { activity: string }) => {
    setCurrentActivity({
      title: data.activity,
      startTime: new Date(),
    });
  };

  const endActivity = () => {
    console.log(currentActivity.startTime);
    mutation.mutate({
      title: currentActivity.title,
      startedAt: currentActivity.startTime.toISOString(),
      endedAt: new Date().toISOString(),
    });
  };

  return (
    <Layout>
      <Head>
        <title>Time Watch - New</title>
      </Head>
      {!currentActivity ? (
        <form onSubmit={handleSubmit(startActivity)}>
          <div className="space-y-4">
            <Input {...register("activity")} />
            <div
              className={classNames([
                "flex",
                "flex-col",
                "content-center",
                "items-center",
                "gap-2",
              ])}
            >
              <CircleButton color="green" type="submit">
                <UilPlay size="48" className="fill-gray-700" />
              </CircleButton>
            </div>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmit(endActivity)}>
          <div className="space-y-4">
            <Time
              title={currentActivity.title}
              startedAt={currentActivity.startTime}
            />
            <div
              className={classNames([
                "flex",
                "flex-col",
                "content-center",
                "items-center",
                "gap-2",
              ])}
            >
              <CircleButton color="green" type="submit">
                <UilCheck size="48" className="fill-gray-700" />
              </CircleButton>
            </div>
          </div>
        </form>
      )}
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
