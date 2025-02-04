import { client } from "@/sanity/lib/client";
import ProductDetailClient from "@/app/component/productDetail";

async function getProduct(id: string) {
  return client.fetch(`*[_type == "products" && _id == $id][0]`, { id });
}

interface ProductDetailProps {
  params: { id: string };
}

export default async function ProductDetail({ params }: ProductDetailProps) {  
  const product = await getProduct(params.id);

  return product ? <ProductDetailClient product={product} /> : <p className="text-center text-red-500">Product not found!</p>;
}
