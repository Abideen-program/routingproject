import { useRouteError } from "react-router-dom";
import Navigation from "../../Naviagtion/Navigation";
import PageContent from "./PageContent";
const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error has occured!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    // message = JSON.parse(error.data).message;
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resources or page!";
  }

  return (
    <main>
      <Navigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </main>
  );
};

export default ErrorPage;
