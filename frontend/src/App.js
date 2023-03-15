import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from "./components/Naviagtion/Navigation";
import EditEventPage from "./components/routes/EditEventPage/EditEventPage";
import EventDetailPage, {
  loader as eventDetailLoader,
} from "./components/routes/EventDetailPage/EventDetailPage";
import EventPage, {
  loader as eventLoader,
} from "./components/routes/EventPage/EventPage";
import HomePage from "./components/routes/HomePage/HomePage";
import NewEventPage from "./components/routes/NewEventPage/NewEventPage";
import ErrorPage from "./components/routes/ErrorPage/ErrorPage";
import EventRootLayout from "./components/EventRootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigation />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "events",
          element: <EventRootLayout />,
          children: [
            {
              index: true,
              element: <EventPage />,
              loader: eventLoader,
            },
            {
              path: ":id",
              loader: eventDetailLoader,
              id: "event-detail",
              children: [
                {
                  index: true,
                  element: <EventDetailPage />,
                },
                { path: "edit", element: <EditEventPage /> },
              ],
            },
            { path: "new", element: <NewEventPage /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
