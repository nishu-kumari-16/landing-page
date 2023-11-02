import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Layout from "./components/layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Loader from "./components/loader-component";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: () => <Loader />,
  },
  {
    path: "about-us",
    element: <div>About us</div>,
    loader: () => <Loader />,
  },
  {
    path: "home",
    element: <Layout />,
    loader: () => <Loader />,
  },
  {
    path: "team",
    element: <div>Team</div>,
    loader: () => <Loader />,
  },
  {
    path: "services",
    element: <div>Services</div>,
    loader: () => <Loader />,
  },
  {
    path: "contact",
    element: <div>Contact</div>,
    loader: () => <Loader />,
  },
]);

root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
