
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../sanity/lib/client";
import ProductDetailClient from "@/app/component/productDetail";


const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source).url();
}


async function getProduct(id: string) {
  return await client.fetch(`*[_type == "products" && _id == $id][0]`, { id });
}

export default async function ProductDetail({ params }: { params: { id: string } }) {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams .id);

  if (!product) {
    return <p className="text-center text-red-500">Product not found!</p>;
  }

  return (
    <ProductDetailClient product={product} />
  );
}
