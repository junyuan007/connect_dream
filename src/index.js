import React from "react";
import ReactDOM from "react-dom/client";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import App from "./App";
import OtherPage from "./Other";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Input } from "semantic-ui-react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const InputExampleInput = () => <Input placeholder="Search..." />;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/other",
    element: <OtherPage name="JJ" />,
  },
  {
    path: "/about",
    element: <Link to="/other">Other</Link>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
