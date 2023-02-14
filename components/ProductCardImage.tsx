import Image from "next/image";

type Props = {
  url?: string;
  alt?: string;
  width?: number;
  height?: number;
};

export default function ProductCardImage({ url, alt, width, height }: Props) {
  if (!url) {
    url = "https://placehold.co/500";
  }

  if (!alt) {
    alt = "product picture";
  }

  if (!width) {
    width = 500;
  }

  if (!height) {
    height = 500;
  }
  return (
    <Image
      src={url}
      alt={"product image" && alt}
      width={width}
      height={height}
    />
  );
}
