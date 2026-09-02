import './src/styles.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {createRouter, RouterProvider} from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};

const router = getRouter()

const rootElement = document.getElementById('root')!
if (rootElement && !rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>,
    )
}