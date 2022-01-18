import classNames from "classnames";

const Time = () => {
  return (
    <div className={classNames(["text-xl", "bg-gray-700", "rounded-3xl"])}>
      <p className={classNames(["py-5", "px-4", "font-bold", "text-white"])}>
        Javascript course
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
