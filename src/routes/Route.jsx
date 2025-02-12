import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import SummaryPage from "../pages/SummaryPage";
import SelectpayPage from "../pages/SelectpayPage";
import QRcodePage from "../pages/QRcodePage";
import CreditcardPage from "../pages/CreditcardPage";
import OrdercomPage from "../pages/OrdercomPage";
import RequestPage from "../pages/RequestPage";
import SuccessPage from "../pages/SuccessPage";
import ErrorPage from "../pages/ErrorPage";
import ErrorNavigate from "../feature/error/ErrorNavigate";
import LoginadminPage from "../pages/LoginadminPage";
import StoragePage from "../pages/StoragePage";
import DashboardPage from "../pages/DashboardPage";
import TablePage from "../pages/TablePage";
import PrivateRoute from "../admin/PrivateRoute";
import TestPage from "../pages/TestPage";
import i18next from "i18next";
import global_en from "../locales/en/global.json";
import global_th from "../locales/th/global.json";
import { I18nextProvider } from "react-i18next";
i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    th: {
      global: global_th,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/loginadmin",
    element: (
      <PrivateRoute>
        <LoginadminPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/storage",
    element: (
      <PrivateRoute>
        <I18nextProvider i18n={i18next}>
          <StoragePage />
        </I18nextProvider>
      </PrivateRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        {" "}
        <I18nextProvider i18n={i18next}>
          <DashboardPage />
        </I18nextProvider>
      </PrivateRoute>
    ),
  },
  {
    path: "/table",
    element: (
      <PrivateRoute>
        <TablePage />
      </PrivateRoute>
    ),
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
  {
    path: "/success",
    element: <SuccessPage />,
  },
  {
    path: "/errorpage",
    element: <ErrorPage />,
  },
  {
    path: "/error",
    element: <ErrorNavigate />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
