import classNames from "classnames";
import { UilPlay, UilPause, UilCheck } from "@iconscout/react-unicons";

const Buttons = () => {
  return (
    <div
      className={classNames([
        "flex",
        "flex-col",
        "content-center",
        "items-center",
        "gap-2",
      ])}
    >
      <a
        href="#"
        className={classNames([
          "flex",
          "p-4",
          "bg-lime-400",
          "rounded-full",
          "drop-shadow",
        ])}
      >
        <UilPlay size="48" className="fill-gray-700" />
      </a>
      <div className={classNames(["flex", "gap-4"])}>
        <a
          href="#"
          className={classNames([
            "flex",
            "p-4",
            "bg-yellow-400",
            "rounded-full",
            "drop-shadow",
          ])}
        >
          <UilPause size="35" className="fill-gray-700" />
        </a>
        <a
          href="#"
          className={classNames([
            "flex",
            "p-4",
            "bg-green-400",
            "rounded-full",
            "drop-shadow",
          ])}
        >
          <UilCheck size="35" className="fill-gray-700" />
        </a>
      </div>
    </div>
  );
};

export default Buttons;
