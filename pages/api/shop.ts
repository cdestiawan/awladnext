import type { NextApiRequest, NextApiResponse } from "next";

import type { Product } from "@/types/product";

const products: Product[] = [
    {
        id: 1,
        name: "Product 1",
        price: 100000,
        slug: "product-1",
    },
    {
        id: 2,
        name: "Product 2",
        price: 200000,
        slug: "product-2",
        images: [
            {
                id: 1,
                url:"https://placehold.co/400",
                alt: "A picture"
            }
        ]
    },
    {
        id: 3,
        name: "Product 3",
        price: 300000,
        slug: "product-3",
        images: [
            {
                id: 1,
                url:"https://placehold.co/300",
                alt: "A picture"
            },
            {
                id: 2,
                url:"https://placehold.co/400",
            },
            {
                id: 3,
                url:"https://placehold.co/400",
            },
        ]
    },
    {
        id: 4,
        name: "Product 4",
        price: 400000,
        slug: "product-4",
        images: [
            {
                id: 1,
                url:"https://placehold.co/300",
            }
        ]
    },
    {
        id: 5,
        name: "Product 5",
        price: 100000,
        slug: "product-5",
        images: [
            {
                id: 1,
                url:"https://placehold.co/500",
            }
        ]
    },
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    res.status(200).json(products)
}