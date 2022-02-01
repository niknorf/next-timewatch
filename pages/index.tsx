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
import { UilPlay } from "@iconscout/react-unicons";
import Input from "../components/Input";
import Layout from "../components/Layout";
import Buttons from "../components/Buttons";
import ToLogs from "../components/ToLogs";
import CircleButton from "../components/CircleButton";

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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{ activity: string }>();
  const mutation = useMutation<
    Activity,
    void,
    { title: string; endedAt: string }
  >(
    (activity) =>
      fetch("/api/v1/activities", {
        method: "POST",
        body: JSON.stringify({
          title: activity.title,
          endedAt: new Date().toISOString(),
        }),
      }).then((response) => response.json()),
    {
      onSuccess: (data) => {
        queryClient.setQueryData(["activities", { id: data.id }], data);
      },
    }
  );

  const onSubmit = (data: { activity: string }) => {
    mutation.mutate({
      title: data.activity,
      endedAt: new Date().toISOString(),
    });
  };

  return (
    <Layout>
      <Head>
        <title>Time Watch - New</title>
      </Head>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <Input {...register("activity")} />
          <Buttons />
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
          <ToLogs />
        </div>
      </form>
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
