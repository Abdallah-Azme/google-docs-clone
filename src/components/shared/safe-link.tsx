import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
} & LinkProps;

export default function SafeLink({ href, children }: Props) {
  return <Link href={href || "#"}>{children}</Link>;
}
