import type { FC } from "react";
import classNames from "classnames";
import Menu from "./Menu";

const Layout: FC = ({ children }) => {
  return (
    <div className={classNames(["h-screen", "bg-gray-300"])}>
      <div className={classNames(["max-w-screen-sm", "w-full", "mx-auto"])}>
        <main>{children}</main>
        <Menu />
      </div>
    </div>
  );
};

export default Layout;
