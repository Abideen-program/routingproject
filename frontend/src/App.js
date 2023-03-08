// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from "./components/Naviagtion/Navigation";
import EditEventPage from "./components/routes/EditEventPage/EditEventPage";
import EventDetailPage from "./components/routes/EventDetailPage/EventDetailPage";
import EventPage from "./components/routes/EventPage/EventPage";
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
            {index: true, element: <EventPage /> },
            { path: ":id", element: <EventDetailPage /> },
            { path: "new", element: <NewEventPage /> },
            { path: ":id/edit", element: <EditEventPage /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
