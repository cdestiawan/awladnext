import type { Product } from "@/types/product";

import ProductCardImage from "./ProductCardImage";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div>
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
