import type { VFC } from "react";
import { Activity } from "@prisma/client";
import classNames from "classnames";

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
        <span>{activity.startedAt}</span>
        <span className="font-bold">1h 15m</span>
        <span>{activity.endedAt}</span>
      </div>
      <div className={classNames(["flex", "px-4", "items-center", "text-xl"])}>
        {activity.title}
      </div>
    </div>
  );
};

export default Activity;
