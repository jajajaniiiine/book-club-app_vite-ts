import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Layout } from "antd";
import { Root } from "./routes/root";
import Inventory from "./pages/inventory";
import ManageAccounts from "./pages/manage-accounts";
import Dashboard from "./pages/dashboard";
import Error404 from "./components/404";
import AddBookPage from "./pages/addBook";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/inventory",
        element: <Inventory />,
      },
      {
        path: "/inventory/add-book",
        element: <AddBookPage />,
      },
      {
        path: "/manage-accounts",
        element: <ManageAccounts />,
      },
    ],
  },
]);
function App() {
  return (
    <Layout style={{ minHeight: "100vh", minWidth: "100vw" }}>
      <RouterProvider router={routes} />
    </Layout>
  );
}

export default App;
