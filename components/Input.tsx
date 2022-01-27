import type { VFC } from "react";
import classNames from "classnames";
import { UilMicrophone } from "@iconscout/react-unicons";

const Input: VFC = () => {
  return (
    <div className="flex space-x-2">
      <input
        type="text"
        name="input"
        className={classNames([
          "grow",
          "px-6",
          "py-3",
          "rounded-3xl",
          "text-xl",
          "drop-shadow",
          "focus:outline-none",
          "focus:ring",
        ])}
        placeholder="New activity:"
      />
      <button
        className={classNames([
          "py-4",
          "px-4",
          "bg-white",
          "rounded-full",
          "drop-shadow",
          "focus:outline-none",
          "focus:ring",
        ])}
      >
        <UilMicrophone size="24" className="fill-gray-700" />
      </button>
    </div>
  );
};

export default Input;
