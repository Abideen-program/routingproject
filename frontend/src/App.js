// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navigation from './components/Naviagtion/Navigation';
import EditEventPage from './components/routes/EditEventPage/EditEventPage';
import EventDetailPage from './components/routes/EventDetailPage/EventDetailPage';
import EventPage from './components/routes/EventPage/EventPage';
import HomePage from './components/routes/HomePage/HomePage';
import NewEventPage from './components/routes/NewEventPage/NewEventPage';

function App() {

  const router = createBrowserRouter([
    {
      path: '/', 
      element: <Navigation />,
      children: [
        {index: true, element: <HomePage />},
        {path: '/events', element: <EventPage />},
        {path: '/events/:id', element: <EventDetailPage />},
        {path: '/events/new', element: <NewEventPage />},
        {path: '/events/:id/edit', element: <EditEventPage />}
      ]
    } 
  ])

  return (
      <RouterProvider router={router} />
  );
}

export default App;
