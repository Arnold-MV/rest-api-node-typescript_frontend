import {
  useNavigate,
  Form,
  ActionFunctionArgs,
  redirect,
  useFetcher,
} from "react-router-dom";
import { Product } from "../types";
import { formatCurrency } from "../utils";
import { deleteProduct } from "../services/ProductService";

type ProductDetailsProps = {
  product: Product;
};

export async function action({ params }: ActionFunctionArgs) {
  if (params.id !== undefined) {
    await deleteProduct(+params.id);
    return redirect("/");
  }
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const fetcher = useFetcher();

  const navigate = useNavigate();

  const isAvailable = product.availability;

  return (
    <tr className="border-b ">
      <td className="p-3 text-lg text-gray-800">{product.name}</td>
      <td className="p-3 text-lg text-gray-800">
        {formatCurrency(product.price)}
      </td>
      <td className="p-3 text-lg text-gray-800">
        <fetcher.Form method="POST">
          <button
            className={`${
              isAvailable ? "text-black" : "text-red-600"
            } rounded-lg p-2 text-xs uppercase font-bold w-full border border-black hover:cursor-pointer`}
            type="submit"
            name="id"
            value={product.id}
          >
            {isAvailable ? "Disponible" : "No Disponible"}
          </button>
        </fetcher.Form>
      </td>
      <td className="p-3 px-2 text-lg text-gray-800">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(`/productos/${product.id}/editar`)}
            className="w-full p-2 text-xs font-bold text-center text-white uppercase bg-indigo-600 rounded-lg"
          >
            Editar
          </button>

          <Form
            className="w-full"
            method="POST"
            action={`productos/${product.id}/eliminar`}
            onSubmit={(e) => {
              if (!confirm("¿Eliminar?")) {
                e.preventDefault();
              }
            }}
          >
            <input
              className="w-full p-2 text-xs font-bold text-center text-white uppercase bg-red-600 rounded-lg"
              type="submit"
              value="Eliminar"
            />
          </Form>
        </div>
      </td>
    </tr>
  );
};

export default ProductDetails;
