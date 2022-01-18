import Link from "next/link";
import classNames from "classnames";

const ToLogs = () => {
  return (
    <div className={classNames(["flex", "justify-center"])}>
      <Link href="/logs">
        <a
          className={classNames([
            "py-2",
            "px-4",
            "text-white",
            "bg-blue-600",
            "rounded-3xl",
          ])}
        >
          Logs →
        </a>
      </Link>
    </div>
  );
};

export default ToLogs;
