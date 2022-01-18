import classNames from "classnames";

const Categories = ({ activityTypes }) => {
  const className = classNames(["p-4", "rounded-3xl"]);

  const colorMap = [
    "bg-indigo-300",
    "bg-green-300",
    "bg-red-300",
    "bg-cyan-300",
    "bg-pink-300",
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
