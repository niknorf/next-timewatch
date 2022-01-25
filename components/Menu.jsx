import classNames from "classnames";
import { UilCog } from "@iconscout/react-unicons";
import ActiveLink from "./ActiveLink";

const menuItemList = [
  {
    text: "New",
    href: "/",
  },
  {
    text: "Logs",
    href: "/logs",
  },
  {
    text: "Stats",
    href: "/stats",
  },
];

const Menu = () => {
  return (
    <div
      className={classNames([
        "flex",
        "items-center",
        "bg-white",
        "border-4",
        "border-white",
        "rounded-4xl",
        "drop-shadow",
        "fixed",
        "bottom-6",
      ])}
    >
      {menuItemList.map((item) => (
        <ActiveLink
          key={item.href}
          className="text-gray-600"
          activeClassName={classNames([
            "text-white",
            "bg-orange-600",
            "rounded-3xl",
          ])}
          href={item.href}
        >
          {(isActive) => (
            <a
              className={classNames(["px-10", "py-4", "text-lg", "leading-6", "font-medium"], {
                [classNames(["text-white", "bg-tw-orange", "rounded-4xl"])]:
                  isActive,
              })}
            >
              {item.text}
            </a>
          )}
        </ActiveLink>
      ))}
      <ActiveLink href="/settings">
        {(isActive) => (
          <a
            className={classNames(["ml-auto", "px-9", "py-3", "rounded-4xl", "ml-40"], {
              "bg-tw-orange": isActive,
            })}
          >
            <>
              <UilCog
                size="30"
                className={classNames({
                  "fill-white": isActive,
                  "fill-slate-700": !isActive,
                })}
              />
            </>
          </a>
        )}
      </ActiveLink>
    </div>
  );
};

export default Menu;
