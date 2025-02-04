"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "@/app/context/CartContext";
import { urlFor } from "@/utils/image";
import Product from "@/app/product/page";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

export default function ProductDetailClient({ product }: { product: any }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      _id: product._id,
      title: product.title,
      price: product.price,
      imageUrl: urlFor(product.image),
      quantity: 1,
    });

    toast.success(`🛒 "${product.title}" added to cart!`, {
      position: "top-right",
      autoClose: 3000, 
    });
  };

  return (
    <div className="w-[90%] xl:w-[70%] mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Image
          src={urlFor(product.image)}
          alt={product.title}
          width={350}
          height={350}
          priority
        />
        <div>
          <h1 className="py-3 text-[32px]">{product.title}</h1>
          <button className="bg-[#029FAE] w-[118px] p-2 text-[#ffffff] mb-3">
            ${product.price}.00 USD
          </button>
          <p className="w-[250px] mb-3">{product.description}</p>
          <button
            className="flex gap-2 bg-[#029FAE] w-[180px] p-2 text-[#ffffff]"
            onClick={handleAddToCart}
          >
            <FontAwesomeIcon icon={faCartShopping} className="w-[22px] h-[22px]" />
            Add To Cart
          </button>
        </div>
      </div>
      <Product />
    </div>
  );
}
