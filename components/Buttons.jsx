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
          "p-5",
          "bg-tw-green",
          "rounded-full",
          "drop-shadow-xl",
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
            "bg-yellow-300",
            "rounded-full",
            "drop-shadow-md",
          ])}
        >
          <UilPause size="35" className="fill-gray-700" />
        </a>
        <a
          href="#"
          className={classNames([
            "flex",
            "p-4",
            "bg-tw-green",
            "rounded-full",
            "drop-shadow-md",
          ])}
        >
          <UilCheck size="35" className="fill-gray-700" />
        </a>
      </div>
    </div>
  );
};

export default Buttons;
