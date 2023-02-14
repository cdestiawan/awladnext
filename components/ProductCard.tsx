import type { Product } from "@/types/product";

import ProductCardImage from "./ProductCardImage";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="w-full p-4 md:w-1/2 lg:w-1/4">
      {product.images ? (
        <ProductCardImage
          url={product.images[0].url}
          alt={product.images[0].alt}
        />
      ) : (
        <ProductCardImage />
      )}
      <p>{product.name}</p>
      <p>{product.price}</p>
    </div>
  );
}
