import { VFC } from "react";
import classNames from "classnames";

interface Props {
  title: string;
  startedAt: Date;
}

const Time: VFC<Props> = ({ title, startedAt }) => {
  return (
    <div className={classNames(["text-xl", "bg-zinc-700", "rounded-3xl"])}>
      <p className={classNames(["py-5", "px-4", "font-medium", "text-white"])}>
        {title}
      </p>
      <div
        className={classNames([
          "py-5",
          "px-4",
          "bg-white",
          "rounded-3xl",
          "border",
          "border-4",
          "border-gray-700",
        ])}
      >
        <span className="font-bold">Time spent: </span>
        <span>1 hour 15 minutes</span>
      </div>
    </div>
  );
};

export default Time;
