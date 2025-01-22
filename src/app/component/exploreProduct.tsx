import Image from "next/image";
import { client } from "../../sanity/lib/client";

interface Idata {
  imageUrl: string;
}

export default async function ExploreProduct() {
  // Fetch products from Sanity
  const ExploreProduct: Idata[] = await client.fetch(
    `*[_type == "products"][0...6]{ "imageUrl": image.asset->url }`
  );

  // Debugging log
  console.log("Fetched data:", ExploreProduct);

  // Ensure data is an array before mapping
  if (!Array.isArray(ExploreProduct)) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-[90%] xl:w-[70%] my-20 mx-auto">
      <p className="text-[34px] font-sans font-bold mb-2 text-center">
        Explore new and popular styles
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        {/* Large Main Image */}
        {ExploreProduct.length > 0 && (
          <div>
            <Image
              src={ExploreProduct[0].imageUrl}
              alt="Popular style"
              width={450}
              height={450}
              className="rounded-[6px]"
              priority
            />
          </div>
        )}

        {/* Grid Layout for Other Images */}
        <div className="grid grid-cols-2 gap-2 w-[450px] h-[450px] mt-3">
          {ExploreProduct.slice(1).map((data, index) => (
            <Image
              key={index}
              src={data.imageUrl}
              alt="Popular style"
              width={200}
              height={220}
              className="rounded-[6px] w-[200px] h-[220px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
