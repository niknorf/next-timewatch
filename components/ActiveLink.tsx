import type { FC, ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import type { LinkProps } from "next/link";
import React from "react";

interface Props extends LinkProps {
  children: (isActive: boolean) => ReactNode | ReactNode;
}

const ActiveLink: FC<Props> = ({ children, ...props }) => {
  const { asPath } = useRouter();
  const isActive = asPath === props.href;

  return (
    <Link {...props}>
      {typeof children === "function" ? children(isActive) : children}
    </Link>
  );
};

export default ActiveLink;
