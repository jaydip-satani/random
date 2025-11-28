import ErrorPageWrapper from "./utils/errorPageWrapper";

export default function NotFound() {
  return <ErrorPageWrapper status={404} message="Not Found" appName="RANDOM" />;
}
