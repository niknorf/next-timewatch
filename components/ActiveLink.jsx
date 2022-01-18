import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

const ActiveLink = ({ children, ...props }) => {
  const { asPath } = useRouter();
  const isActive = asPath === props.href;

  return (
    <Link {...props}>
      {typeof children === "function" ? children(isActive) : children}
    </Link>
  );
};

export default ActiveLink;
