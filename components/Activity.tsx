import type { VFC } from "react";
import { Activity } from "@prisma/client";
import classNames from "classnames";
import { format } from "date-fns";

interface Props {
  activity: Activity;
}

const Activity: VFC<Props> = ({ activity }) => {
  return (
    <div className={classNames(["flex", "bg-indigo-200", "rounded-3xl"])}>
      <div
        className={classNames([
          "flex",
          "flex-col",
          "p-4",
          "bg-white",
          "border",
          "border-4",
          "border-indigo-200",
          "rounded-3xl",
        ])}
      >
        <span>{format(new Date(activity.startedAt), "HH:mm")}</span>
        <span className="font-bold">1h 15m</span>
        <span>{format(new Date(activity.endedAt), "HH:mm")}</span>
      </div>
      <div className={classNames(["flex", "px-4", "items-center", "text-xl"])}>
        {activity.title}
      </div>
    </div>
  );
};

export default Activity;
