import classNames from "classnames";

const Activity = () => {
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
        <span>9:00</span>
        <span className="font-bold">1h 15m</span>
        <span>10:15</span>
      </div>
      <div className={classNames(["flex", "px-4", "items-center", "text-xl"])}>
        Javascript course
      </div>
    </div>
  );
};

export default Activity;
