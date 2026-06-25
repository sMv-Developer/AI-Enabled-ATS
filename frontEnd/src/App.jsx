import { useState, useMemo } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { DataProvider, useDataContext } from "./context/dataContext";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Toaster } from "./components/common";
import {
  Layout,
  ResumeJdMatcher,
  MatchResultsComponent,
  MatchUnavailableComponent,
} from "./components";

function AppRouter() {
  const { data, setData } = useDataContext();

  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          element: <Layout />,
          children: [
            {
              path: "/",
              element: <ResumeJdMatcher setData={setData} />,
            },
            {
              path: "/match",
              element: data ? (
                <MatchResultsComponent data={data} />
              ) : (
                <MatchUnavailableComponent />
              ),
            },
            {
              path: "/about",
              element: <About />,
            },
            {
              path: "/contact",
              element: <Contact />,
            },
            {
              path: "*",
              element: <Navigate to="/" replace />,
            },
          ],
        },
      ]),
    [data, setData]
  );

  return <RouterProvider router={router} />;
}

export default function App() {
  const [data, setData] = useState(null);

  return (
    <DataProvider value={{ data, setData }}>
      <AppRouter />
      <Toaster />
    </DataProvider>
  );
}