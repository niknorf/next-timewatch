import type { HTMLAttributes, MutableRefObject, VFC } from "react";
import { forwardRef } from "react";
import classNames from "classnames";
import { UilMicrophone } from "@iconscout/react-unicons";

interface Props extends HTMLAttributes<HTMLInputElement> {}

const Input: VFC<Props> = forwardRef(
  ({ ...props }, ref: MutableRefObject<HTMLInputElement>) => {
    return (
      <div className="flex space-x-2">
        <input
          {...props}
          ref={ref}
          type="text"
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
          autoComplete="off"
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
          type="submit"
        >
          <UilMicrophone size="24" className="fill-gray-700" />
        </button>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
