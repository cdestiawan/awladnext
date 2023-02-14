import { GetStaticProps } from "next";

import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";

type Props = {
  products: Product[];
};

export default function ShopIndex({ products }: Props) {
  return (
    <div className="flex">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/shop");
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
};
