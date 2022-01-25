import type { VFC } from "react";
import { ActivityType } from "@prisma/client";
import classNames from "classnames";

interface Props {
  activityTypes: ActivityType[];
}

const Categories: VFC<Props> = ({ activityTypes }) => {
  const className = classNames(["p-4", "rounded-3xl"]);

  const colorMap = [
    "bg-indigo-200",
    "bg-green-200",
    "bg-red-200",
    "bg-cyan-200",
    "bg-pink-200",
    "bg-white",
  ];

  return (
    <div className={classNames(["grid", "grid-cols-3", "gap-4"])}>
      {activityTypes.map((activityType, index) => (
        <button
          key={activityType.id}
          className={classNames(className, colorMap[index % colorMap.length])}
        >
          {activityType.name}
        </button>
      ))}
      <button className={classNames(className, ["bg-white", "font-bold"])}>
        +
      </button>
    </div>
  );
};

export default Categories;
