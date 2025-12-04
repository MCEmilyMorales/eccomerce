import PageProducts from "@/features/productos/components/PageProducts";
import getProductos from "@/features/productos/getProductos";

export default async function PanelPage() {
  console.log("1️⃣ llama a productos");

  const productos = await getProductos();
  console.log("1️⃣ devuelve los productos", productos);

  return <PageProducts products={productos} />;
}
