import { createBrowserRouter } from 'react-router-dom';
import { Home, TodoApp, LoginForm, Calculator, Products, ImgCarousels, CounterApp, Accordion, FaqQustions } from "./Projects"

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      { path: 'todo', element: <TodoApp /> },
      { path: 'login', element: < LoginForm /> },
      { path: 'calculator', element: < Calculator /> },
      { path: 'useFetch', element: < Products /> },
      { path: 'carousel', element: < ImgCarousels /> },
      { path: 'counter', element: < CounterApp /> },
      { path: 'accordion', element: < FaqQustions /> },

    ],
  },
]);
