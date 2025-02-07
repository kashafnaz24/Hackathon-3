import { client } from "@/sanity/lib/client";
import ProductDetailClient from "@/app/component/productDetail";


interface PageProps {
  params: {
    id: string;
  };
}

const ProductDetailPage = async ({ params }: PageProps) => {
  
  async function getProduct(id: string) {
    try {
      return await client.fetch(`*[_type == "products" && _id == $id][0]`, { id });
    } catch (error) {
      console.error("Error fetching product:", error);
      return null;
    }
  }

  try {
    
    const product = await getProduct(params.id);

    
    if (!product) {
      return <p className="text-center text-red-500">Product not found!</p>;
    }

    
    return <ProductDetailClient product={product} />;
  } catch (error) {
    console.error("Error rendering product detail page:", error);
    return <p className="text-center text-red-500">Something went wrong!</p>;
  }
};

export default ProductDetailPage;
