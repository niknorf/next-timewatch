import { FC, HTMLAttributes } from "react";
import classNames from "classnames";

interface Props extends Omit<HTMLAttributes<HTMLButtonElement>, "className"> {
  type?: "button" | "submit";
  size?: "medium" | "large";
  color: "green";
}

const CircleButton: FC<Props> = ({
  type = "button",
  size = "medium",
  color,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={classNames(["flex", "rounded-full", "drop-shadow-xl"], {
        "p-4": size === "medium",
        "p-5": size === "large",
        "bg-tw-green": color === "green",
      })}
      type={type}
    >
      {children}
    </button>
  );
};

export default CircleButton;
