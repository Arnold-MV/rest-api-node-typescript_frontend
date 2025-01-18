import { createBrowserRouter } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import Products, {
  action as updateProductAction,
  loader as productLoader,
} from "./views/Products";
import NewProducts, { action as newProductAction } from "./views/NewProducts";
import EditProduct, {
  loader as editProductLoader,
  action as editProductAction,
} from "./views/EditProduct";
import { action as deleteProductAction } from "./components/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: productLoader,
        action: updateProductAction,
      },
      {
        path: "productos/nuevo",
        element: <NewProducts />,
        action: newProductAction,
      },
      {
        path: "productos/:id/editar", // ROA Pattern - Resource-Oriented design
        element: <EditProduct />,
        loader: editProductLoader,
        action: editProductAction,
      },
      {
        path: "productos/:id/eliminar",
        action: deleteProductAction,
      },
    ],
  },
]);

export default router;
