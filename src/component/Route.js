import { createBrowserRouter } from 'react-router-dom';
import { Home, TodoApp, LoginForm } from "./Projects"

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      { path: 'todo', element: <TodoApp /> }, 
      { path: 'login', element: < LoginForm /> }, 
    ],
  },
]);
