"use client";

import { usePathname } from "next/navigation";
import { ErrorPage } from "./errorPage";

interface Props {
  status: number;
  message: string;
  appName?: string;
}

export default function ErrorPageWrapper({ status, message, appName }: Props) {
  const pathname = usePathname();

  return (
    <ErrorPage
      status={status}
      message={message}
      url={pathname}
      appName={appName}
    />
  );
}
