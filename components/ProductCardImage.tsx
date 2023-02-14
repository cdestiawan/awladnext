import Image from "next/image";

type Props = {
  url?: string;
  alt?: string;
  width?: number;
  height?: number;
};

export default function ProductCardImage({ url, alt, width, height }: Props) {
  if (!url) {
    url = "https://placehold.co/300";
  }

  if (!alt) {
    alt = "product picture";
  }

  if (!width) {
    width = 300;
  }

  if (!height) {
    height = 300;
  }
  return (
    <Image
      src={url}
      alt={"product image" && alt}
      width={300 || width}
      height={300 || height}
    />
  );
}
