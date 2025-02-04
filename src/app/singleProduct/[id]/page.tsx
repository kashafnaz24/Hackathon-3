import { client } from "@/sanity/lib/client";
import ProductDetailClient from "@/app/component/productDetail";

async function getProduct(id: string) {
  return await client.fetch(`*[_type == "products" && _id == $id][0]`, { id });
}

export default async function ProductDetail({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  if (!product) {
    return <p className="text-center text-red-500">Product not found!</p>;
  }

  return <ProductDetailClient product={product} />;
}
