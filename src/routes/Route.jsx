import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import SummaryPage from "../pages/SummaryPage";
import SelectpayPage from "../pages/SelectpayPage";
import QRcodePage from "../pages/QRcodePage";
import CreditcardPage from "../pages/CreditcardPage";
import OrdercomPage from "../pages/OrdercomPage";
import RequestPage from "../pages/RequestPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
  {
    path: "/summary",
    element: <SummaryPage />,
  },
  {
    path: "/selectpay",
    element: <SelectpayPage />,
  },
  {
    path: "/QRcodepay",
    element: <QRcodePage />,
  },
  {
    path: "/Creditcardpay",
    element: <CreditcardPage />,
  },
  {
    path: "/ordercomplete",
    element: <OrdercomPage />,
  },
  {
    path: "/request_receipt",
    element: <RequestPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
