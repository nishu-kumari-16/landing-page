import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Layout from "./components/layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Loader from "./components/loader-component";
import Home from "./pages/home";
import ContactUs from "./pages/contact-us";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: () => <Loader />,
  },
  {
    path: "about-us",
    element: <div>About us</div>,
    loader: () => <Loader />,
  },
  {
    path: "home",
    element: <Home />,
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
    element: <ContactUs />,
    loader: () => <Loader />,
  },
]);

root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
